declare const opentelemetry: any;
declare const NodeTracer: any;
declare const SimpleSpanProcessor: any;
declare const JaegerExporter: any;
declare const ZipkinExporter: any;
declare const EXPORTER: string;
declare function setupTracerAndExporters(service: string): void;
