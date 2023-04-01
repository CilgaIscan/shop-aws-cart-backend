import { HttpService, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
  private readonly baseURL: string = process.env.PRODUCT_SERVICE_API_GW_URL;

  constructor(
    private readonly httpService: HttpService,
  ) {}

  async findById(productId: string): Promise<any> {
    const url = `${this.baseURL}/products/${productId}`;

    return this.httpService.get<unknown>(url)
      .toPromise()
      .then((resp) => resp.data);
  }
}
