import { Injectable } from '@nestjs/common';
import * as mock_data from './../../mock_data.json';

@Injectable()
export class ProductsService {
    get(): object {
        return { status: 200, data: mock_data };
    }
}
