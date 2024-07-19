import { IsAlphanumeric, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength, maxLength } from "class-validator";

export default class UsernameDto {
    @IsNotEmpty()
    @IsString()
    @Matches(/^[\w-]+$/, { message: 'String must contain only alphanumeric characters, underscores, or hyphens' })
    @MinLength(6)
    @MaxLength(16)
    @Matches(/^[a-zA-Z]/, { message: 'String must start with a letter' })
    username: string
}
