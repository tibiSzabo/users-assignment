import { Deserializable } from './deserializable.model';

export class User implements Deserializable {


    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}
