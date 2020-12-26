import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../models/user.model';

describe('UserService', () => {

    const mockUserResponse = [
        {
            'id': 1,
            'name': 'Leanne Graham',
            'username': 'Bret',
            'email': 'Sincere@april.biz',
        },
        {
            'id': 2,
            'name': 'Ervin Howell',
            'username': 'Antonette',
            'email': 'Shanna@melissa.tv',
        }
    ];
    let httpTestingController: HttpTestingController;
    let service: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [
                UserService
            ]
        });

        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(UserService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should get correct answer from mocked API', () => {
        service.usersChanged.subscribe(users => {
            expect(users.length).toBe(2);
            expect(users[0].name).toBe('Leanne Graham');
            expect(users[1].name).toBe('Ervin Howell');
        });

        const req = httpTestingController.expectOne(
            'https://jsonplaceholder.typicode.com/users'
        );

        req.flush(mockUserResponse);
    });

    it('should add new user', () => {
        const userToBeAdded = new User().deserialize({
            'id': 3,
            'name': 'Test Name',
            'username': 'Test Username',
            'email': 'Test Email',
        });
        service.addUser(userToBeAdded);
        expect(service.users).toContain(userToBeAdded);

        const req = httpTestingController.expectOne(
            'https://jsonplaceholder.typicode.com/users'
        );

        req.flush(mockUserResponse);
    });

    it('should not add user with existing id', () => {
        const userToBeAdded = new User().deserialize({
            'id': 1,
            'name': 'Test Name',
            'username': 'Test Username',
            'email': 'Test Email',
        });

        const req = httpTestingController.expectOne(
            'https://jsonplaceholder.typicode.com/users'
        );
        req.flush(mockUserResponse);

        expect(service.addUser(userToBeAdded).msg).toBe('User with id: 1 already exists!');

    });

    it('should remove user', () => {

        const req = httpTestingController.expectOne(
            'https://jsonplaceholder.typicode.com/users'
        );
        req.flush(mockUserResponse);

        expect(service.removeUser(1).success).toBe(true);
        expect(service.users.length).toBe(1);

    });

    it('should not remove user without existing id', () => {

        const req = httpTestingController.expectOne(
            'https://jsonplaceholder.typicode.com/users'
        );
        req.flush(mockUserResponse);

        expect(service.removeUser(999).msg).toBe('Something went wrong!');

    });

});
