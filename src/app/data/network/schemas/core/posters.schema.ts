import { Exclude, Expose, Type } from "class-transformer";

@Exclude()
class PostersDataSchema {
    @Expose({ name: "240" }) public readonly s240?: string;
    @Expose({ name: "blurhash" }) public readonly blurHash?: string;
}

export class PostersSchema {
    @Type(() => PostersDataSchema)
    public readonly data: PostersDataSchema;
}