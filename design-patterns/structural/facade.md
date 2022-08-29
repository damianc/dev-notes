# Facade

Examples:
- [Archaic Calculator](#example-1-archaic-calculator)
- [Scary HTTP Connector](#example-2-scary-http-connector)

## Example 1: Archaic Calculator

* use:

```
const calc = new CalcFacade();

const five = calc.sum(2,3);
// "ArchaicCalc is used in guts 👻"

const eight = calc.diff(12,4);
// "ArchaicCalc is used in guts 👻"

console.log(five, eight);
// 5, 8
```

* Inconvenient Tool - `ArchaicCalc`:

```
class ArchaicCalc {
    private numberA!: number;
    private numberB!: number;
    private op!: (a: number, b: number) => number;

    public setNumberA(a: number): void {
        this.numberA = a;
    }

    public setNumberB(b: number): void {
        this.numberB = b;
    }

    public setOperation(op: (a: number, b: number) => number): void {
        this.op = op;
    }

    public calc(): number {
        console.log('ArchaicCalc is used in guts 👻');

        if (this.numberA && this.numberB && this.op) {
            return this.op(this.numberA, this.numberB);
        }

        return NaN;
    }
}
```

* Facade - `CalcFacade`:

```
class CalcFacade {
    private archaic = new ArchaicCalc();

    public sum(a: number, b: number): number {
        this.archaic.setOperation((a, b) => a + b);
        return this.calc(a, b);
    }

    public diff(a: number, b: number): number {
        this.archaic.setOperation((a, b) => a - b);
        return this.calc(a, b);
    }

    private calc(a: number, b: number): number {
        this.archaic.setNumberA(a);
        this.archaic.setNumberB(b);
        return this.archaic.calc();
    }
}
```

## Example 2: Scary HTTP Connector

* use:

```
const hf = new HttpFacade();
hf.request('https://dev.foobarbaz.com/api/images', {
    params: { id: 1234, format: 'png' },
    method: 'get',
    headers: {
        Accept: 'image/png, image/jpeg;q=0.9'
    }
});
```

* Inconvenient Tool - `HttpConnector`:

```
class HttpConnector {
    private url!: string;
    private method!: string;
    private parameters: Record<string, string | number> = {};
    private headers: Header[] = [];

    public setUrl(url: Url): void {
        this.url = url.get();
    }

    public setMethod(method: string): void {
        this.method = method;
    }

    public setParameters(parameters: Record<string, string | number>): void {
        this.parameters = parameters;
    }

    public setHeaders(headers: Header[]): void {
        this.headers = headers;
    }

    public request(): void {
        const paramsEntries = Object.entries(this.parameters);

        const method = this.method.toUpperCase();
        const url = this.url + (paramsEntries.length ? '?' : '');
        const params = paramsEntries.map(e => `${e[0]}=${e[1]}`).join('&');
        const headers = this.headers.map(h => h.get()).map(h => `${h[0]}: ${h[1]}`);

        console.log(
            `${method} ${url}${params} \n----\n ${
                headers.join('\n')
            }`
        );
    }
}

class Header {
    private headerName!: string;
    private headerValue!: string;

    public setHeader(name: string): void {
        this.headerName = name;
    }

    public setHeaderValue(value: string): void {
        this.headerValue = value;
    }

    public get(): [string, string] {
        return [this.headerName, this.headerValue];
    }
}

class Url {
    private protocol!: string;
    private host!: string;
    private endpoint!: string;

    public setProtocol(protocol: string): void {
        this.protocol = protocol;
    }

    public setHost(host: string): void {
        this.host = host;
    }

    public setEndpoint(endpoint: string): void {
        this.endpoint = endpoint;
    }

    public get(): string {
        return `${this.protocol}://${this.host}/${this.endpoint}`;
    }
}
```

* Facade - `HttpFacade`:

```
interface RequestConfig {
    params?: Record<string, string | number>;
    method?: 'get' | 'post';
    headers?: Record<string, string | number>;
}
class HttpFacade {
    private hc = new HttpConnector();

    public request(
        apiUrl: string,
        { params, method, headers }: RequestConfig
    ): void {
        this.hc.setMethod(method!);
        this.hc.setParameters(params!);

        const [protocol, host, endpoint] = apiUrl.split(
            /(?:(?:\:\/\/)|(?:(?<=\.[^\/]+)\/))/
        );

        const url = new Url();
        url.setProtocol(protocol);
        url.setHost(host);
        url.setEndpoint(endpoint);
        this.hc.setUrl(url);

        this.hc.setHeaders(
            Object.entries(
                headers as Record<string,string | number>
            ).map(([hn, hv]) => {
                const header = new Header();
                header.setHeader(hn);
                header.setHeaderValue(hv as string);
                return header;
            })
        );

        this.hc.request();
    }
}
```