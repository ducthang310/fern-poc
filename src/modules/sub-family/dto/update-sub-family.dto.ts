import { PartialType } from '@nestjs/swagger';
import { CreateSubFamilyDto } from './create-sub-family.dto';

export class UpdateSubFamilyDto extends PartialType(CreateSubFamilyDto) {}
