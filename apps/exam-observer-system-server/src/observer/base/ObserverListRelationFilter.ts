/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ObserverWhereInput } from "./ObserverWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ObserverListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ObserverWhereInput,
  })
  @ValidateNested()
  @Type(() => ObserverWhereInput)
  @IsOptional()
  @Field(() => ObserverWhereInput, {
    nullable: true,
  })
  every?: ObserverWhereInput;

  @ApiProperty({
    required: false,
    type: () => ObserverWhereInput,
  })
  @ValidateNested()
  @Type(() => ObserverWhereInput)
  @IsOptional()
  @Field(() => ObserverWhereInput, {
    nullable: true,
  })
  some?: ObserverWhereInput;

  @ApiProperty({
    required: false,
    type: () => ObserverWhereInput,
  })
  @ValidateNested()
  @Type(() => ObserverWhereInput)
  @IsOptional()
  @Field(() => ObserverWhereInput, {
    nullable: true,
  })
  none?: ObserverWhereInput;
}
export { ObserverListRelationFilter as ObserverListRelationFilter };
