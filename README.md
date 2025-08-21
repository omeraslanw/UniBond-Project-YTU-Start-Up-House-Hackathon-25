# UniBond

![Java](https://img.shields.io/badge/Java-17-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.3-brightgreen)
![Maven](https://img.shields.io/badge/Maven-3.9.6-red)

## Proje Hakkında

> Bu proje, YTU Start Up House tarafından düzenlenen Hackathon'25 yarışması sırasında 36 saat içerisinde oluşturulmuştur.
**Projenin amacı:**
> 1) Üniversite öğrencilerinin hem kendi üniversitelerindeki hem diğer üniversitelerdeki hem de başka organizasyonlar tarafından düzenlenen etkinlikleri takip edebilmesine olanak sağlamak,
> 2) Kariyer, sosyal ve kültürel odaklı üniversite kulüplerinin takibe alınmasını kolaylaştırması,
> 3) Öğrencilerin AI destekli chat bot ile kariyer tavsiyeleri alabilmesidir

## Proje Ekibi

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/omeraslanw">  
        <img src="https://avatars.githubusercontent.com/u/112866826?v=4" width="200px;" alt="Ömer Faruk Aslan"/>
        <br />
        <sub><b>Full Stack Dev: Ömer Faruk Aslan</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/burakYilmazzZ1">  
        <img src="https://avatars.githubusercontent.com/u/132089341?v=4" width="200px;" alt="Burak Yılmaz"/>
        <br />
        <sub><b>AI Dev: Burak Yılmaz</b></sub>
      </a>
    </td>
  </tr>
</table> 

### Kullanılan Teknolojiler

**Back End (Java, SpringBoot):**
- Java 17
- Spring Boot 3.4.3
- Spring Data JPA & Hibernate
- PostgreSQL
- Maven
- Lombok
- JWT 0.9.1

**Back End (Python Flask, ChatBot):**
- Python
- Flask
- Flask-Cors
- Openai
- Pandas
- Fuzzywuzzy
- Python-Levenshtein

**FrontEnd:**
- React
- Axios
- Bootstrap
- JavaScript

## Başlarken

### Ön Gereksinimler

* Java 17
* Maven
* PostgreSQL

### Kurulum ve Yapılandırma

1.  **Depoyu klonlayın:**
    ```sh
    git clone https://github.com/omeraslanw/SkyNews.git
    ```
2.  **Veritabanını ayarlayın:**
    PostgreSQL'de `proje_db` adında bir veritabanı oluşturun.
3.  **Yapılandırma dosyasını düzenleyin:**
    `src/main/resources/application.properties` dosyasını aşağıdaki gibi kendi yerel ayarlarınızla güncelleyin:
    ```properties
    spring.datasource.url=jdbc:postgresql://localhost:5432/proje_db
    spring.datasource.username=postgres_kullanicisi
    spring.datasource.password=sifreniz
    spring.jpa.hibernate.ddl-auto=update
    ```

### Çalıştırma

1) **Bağımlılıkları yükleyin ve projeyi derleyin:**
```sh
mvn clean install
```

2) **Projeyi çalıştırmak için projenin kök dizininde aşağıdaki komutu çalıştırın:**
```sh
mvn spring-boot:run
```
