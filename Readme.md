# WEB CODE CHALLENGE

##### Proje içerisinde Database,UI framework ,Backend ve Container teknolojileri kullanılmıştır.

**Proje 3 Kısımdan oluşur:**

1. DB :MySql
2. UI :ReactJs
3. API:.Net Core 3.0

Geliştirilen proje Docker kullanılarak build alınmış ve 3 kısımında ayrı ayrı imageleri oluşturulmuştur.
Bu imageleri hub.docker.com reposuna tulpardev/ets repository'si altına pushlanmıştır.

Projeyi ayağa kaldırmak için 3 imageninde sırasıyla run edilmesi gerekmektedir.
ilk önce 'db' sonra 'ui' ve db containerinin başarılı bir şekilde ayağa kalktığı görüldüğünde son olarak
'api' containeri run edilir.

> **_'api'_** containeri ayağa kalkarken MySql Db'sine bağlanarak Users tablosunu auto migrigate eder ve içerisine bir kullanıcıyı default
> insert eder.

> **_'ui'_** containeri içerisinde build'i alınmış react projesini barındırır ve bunu serve edebilmek için nginx webserver olarak kullanılmıştır.Nginx ::80 portuna gelen istekleri 2 kısımda dinlemektedir.
>
> - location '/' bu istekler UI istekleridir ve usr/share/nginx/html file'ına aktarılır.Burada index.html serve edilmektedir.
> - location '/api' bu istekler webapi istekleridir ve nginx ters proxy işlevi görerek istekleri ::5000 portuna 'api' containerine iletir

> **_'db'_** containeri password'ü belirlenmiş ve base image olarak mysql imagesi kullanılmış bir containerdır.Ayağa kalktığında MySql serveri
> ayağa kalkar.

_Uygulamanın run edilmesi ve UI akışı aşağıda bulunan gif içerisinde mevcuttur._

**Gereklilikler**

- Docker Engine

```bash
docker run -d --network host tulpardev/ets:db
docker run -d --network host tulpardev/ets:ui
docker run -d --network host tulpardev/ets:api
```

![](https://github.com/tulpardev/RecordBook/blob/master/SuhaArikanETS.gif)
