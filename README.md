# UniBond

![Logo](https://github.com/omeraslanw/UniBond-Project-YTU-Start-Up-House-Hackathon-25/blob/main/images/Tak%C4%B1m%20(1).png?raw=true)

![Java](https://img.shields.io/badge/Java-000000?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

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

**Front End:**
- React
- Axios
- Bootstrap
- JavaScript

## Başlarken

### Back End Kurulum (Java)

#### Ön Gereksinimler

* Java 17
* Maven
* PostgreSQL

#### Kurulum ve Yapılandırma

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
#### Çalıştırma

1) **Kök dizininizde backend dosyasına gidin:**
```sh
cd "c:\Users\zomt\Desktop\ömer\Yazılım Geliştirme\UniBond-Project-YTU-Start-Up-House-Hackathon-25-main\UniBond-Project-YTU-Start-Up-House-Hackathon-25-main\backend"  
```
2) **Bağımlılıkları yükleyin ve projeyi derleyin:**
```sh
mvn clean install
```
3) **Projeyi çalıştırmak için projenin kök dizininde aşağıdaki komutu çalıştırın:**
```sh
mvn spring-boot:run
```
### Back End Kurulum (Python)

#### Ön Gereksinimler

* Python
* Flask
* Flask-Cors
* Openai
* Pandas
* Fuzzywuzzy
* Python-Levenshtein

#### Çalıştırma

1) **Kök dizininizde backend dosyasına gidin:**
```sh
cd "c:\Users\zomt\Desktop\ömer\Yazılım Geliştirme\UniBond-Project-YTU-Start-Up-House-Hackathon-25-main\UniBond-Project-YTU-Start-Up-House-Hackathon-25-main\backend"  
```
2) **Bağımlılıkları yükleyin ve projeyi derleyin:**
```sh
pip install -r requirements.txt
```
3) **OPEN AI API anahtarınızı belirtin:**
```sh
$env:OPENAI_API_KEY="your_openai_api_key"
```
4) **Projeyi çalıştırmak için projenin kök dizininde aşağıdaki komutu çalıştırın:**
```sh
python app.py
```

### Front End Kurulum (React)

#### Ön Gereksinimler

* React
* Axios
* Bootstrap
* JavaScript

#### Çalıştırma

1) **Kök dizininizde backend dosyasına gidin:**
```sh
cd "c:\Users\zomt\Desktop\ömer\Yazılım Geliştirme\UniBond-Project-YTU-Start-Up-House-Hackathon-25-main\UniBond-Project-YTU-Start-Up-House-Hackathon-25-main\frontend"  
```
2) **Bağımlılıkları yükleyin ve projeyi derleyin:**
```sh
npm install
```
3) **Projeyi çalıştırmak için projenin kök dizininde aşağıdaki komutu çalıştırın:**
```sh
npm start
```

## Uygulama Görüntüleri

Uygulamanın temel özelliklerini gösteren bazı ekran görüntüleri aşağıdadır.

### Ana Sayfa
![Uygulamanın ana sayfası](https://github.com/omeraslanw/UniBond-Project-YTU-Start-Up-House-Hackathon-25/blob/main/images/ana%20ekran.png?raw=true)

### AI Chat Bot
![Chat Bot](https://github.com/omeraslanw/UniBond-Project-YTU-Start-Up-House-Hackathon-25/blob/main/images/unibond.png?raw=true)

### Etkinlik Detayı
![Etkinlik detay](https://github.com/omeraslanw/UniBond-Project-YTU-Start-Up-House-Hackathon-25/blob/main/images/etkinlik%20detay.png?raw=true)

### Kullanıcı Kaydı
![Kayıt](https://github.com/omeraslanw/UniBond-Project-YTU-Start-Up-House-Hackathon-25/blob/main/images/kay%C4%B1t.png?raw=true)
