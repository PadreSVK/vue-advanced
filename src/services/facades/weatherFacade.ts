
import { Configuration, TemperatureDataApi } from "@/services/apiClient";

export class WeatherFacade{

    api: TemperatureDataApi;
    constructor(){
        this.api = new TemperatureDataApi(new Configuration({
            basePath: "https://localhost:5001"
        }))
    }

    async getAll(){
        return await this.api.apiTemperatureDataGet({ }) 
    }
}