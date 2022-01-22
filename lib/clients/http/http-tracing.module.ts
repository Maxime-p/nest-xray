import { HttpModule, HttpModuleAsyncOptions, HttpService } from "@nestjs/axios";
import { DynamicModule, Module } from "@nestjs/common";
import { TracingAxiosInterceptor } from "./tracing.axios-interceptor";

@Module({
  providers: [HttpService, TracingAxiosInterceptor],
  exports: [HttpService],
})
export class HttpTracingModule {
  public static registerAsync(options: HttpModuleAsyncOptions): DynamicModule {
    const httpModule = HttpModule.registerAsync(options);

    return {
      ...httpModule,
      module: HttpTracingModule,
    };
  }
}
