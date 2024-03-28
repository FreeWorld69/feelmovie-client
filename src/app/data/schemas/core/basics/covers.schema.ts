import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CoversSchema {
  @Expose({ name: '1920' })
  public readonly s1920?: string;

  @Expose({ name: '1050' })
  public readonly s1050?: string;

  @Expose({ name: '510' })
  public readonly s510?: string;

  @Expose({ name: '367' })
  public readonly s367?: string;

  @Expose({ name: '145' })
  public readonly s145?: string;
}
