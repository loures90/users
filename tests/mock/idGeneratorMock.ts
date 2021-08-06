export class IdGeneratorMock{

    generate(): string{
        return "abc123";
    }
}
export const idGeneratorMock = new IdGeneratorMock()