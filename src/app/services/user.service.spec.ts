import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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

    it('should be created', () => {
        expect(service).toBeTruthy();
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

});
