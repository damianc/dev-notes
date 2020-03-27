# Decorators

## Struct Decorators

| Decorator | Struct |
|-----------|--------|
| `@Module()` | module |
| `@Controller()` | controller |
| `@Injectable()` | service |

## HTTP Method Decorators

* `@Get()`
* `@Post()`
* `@Put()`
* `@Delete()`
* `@Patch()`
* `@Options()`
* `@Head()`
* `@All()`

## Param Decorators

| Decorator | Respective Express/Fastify Object |
|-----------|-----------------------------------|
| `@Request()`/`@Req()` | `req` |
| `@Response()`/`@Res()` | `res` |
| `@Next()` | `next` |
| `@Session()` | `req.session` |
| `@Param(param?: string)` | `req.params`/`req.params[param]` |
| `@Body(key?: string)` | `req.body`/`req.body[key]` |
| `@Query(key?: string)` | `req.query`/`req.query[key]` |
| `@Headers(key?: string)` | `req.headers`/`req.headers[key]` |
| `@Ip()` | `req.ip` |
