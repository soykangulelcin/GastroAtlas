# 🍽️ GastroAtlas - Dünya Mutfakları Veri Tabanı

Bu dökümantasyon, Web Tasarım dersi kapsamında geliştirilen "GastroAtlas" uygulamasının teknik mimarisini, kullanılan teknolojileri ve ödev gereksinimlerini karşılayan yapıları açıklamaktadır.

---

## 📂 BÖLÜM 1: Geliştirici Bilgileri

* Geliştirici Adı Soyadı: SOYKAN GÜLELÇİN
* Ders: Web Tasarım
* Proje Adı: GastroAtlas
* Proje Teması: Dünya mutfaklarına ait yemeklerin listelenmesi ve yönetilmesi

---

## 🛠️ BÖLÜM 2: Kullanılan Teknolojiler

Bu proje modern web teknolojileri kullanılarak geliştirilmiştir.

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API
* Async / Await
* LocalStorage
* Git & GitHub

---

## 📥 BÖLÜM 3: Public API Entegrasyonu

Projede veri kaynağı olarak TheMealDB Public API kullanılmıştır.

API Adresi:

https://www.themealdb.com/api/json/v1/1/search.php?s=

Bu API üzerinden dünya mutfaklarına ait yemek verileri çekilmektedir.

Çekilen veriler:

* Yemek Adı
* Ülke / Bölge
* Kategori

bilgilerini içermektedir.

---

## 🔄 BÖLÜM 4: Fetch API ve Async/Await Kullanımı

Veriler API üzerinden asenkron olarak çekilmektedir.

Kullanılan yapı:

* fetch()
* async
* await
* try/catch

Bu sayede uygulama kullanıcı arayüzünü kilitlemeden veri alışverişi gerçekleştirmektedir.

---

## 💻 BÖLÜM 5: DOM Manipülasyonu

Projede statik kart yapıları kullanılmamıştır.

API'den gelen her yemek:

* createElement()
* innerHTML
* appendChild()

yardımıyla dinamik olarak oluşturulmaktadır.

Kartlar JavaScript tarafından ekrana yerleştirilmektedir.

---

## 🔁 BÖLÜM 6: CRUD İşlemleri

### CREATE (Veri Ekleme)

Kullanıcı yeni tarif oluşturabilir.

Form aracılığıyla alınan bilgiler uygulamaya eklenmektedir.

---

### READ (Veri Listeleme)

Sayfa açıldığında API'den gelen yemekler listelenmektedir.

---

### UPDATE (Veri Güncelleme)

Düzenle butonu kullanılarak yemek isimleri güncellenebilmektedir.

---

### DELETE (Veri Silme)

Sil butonu kullanılarak tarif kartları kaldırılabilmektedir.

---

## 🔍 BÖLÜM 7: Arama ve Filtreleme Sistemi

Kullanıcılar:

* Yemek adına göre arama yapabilir.
* Ülkelere göre filtreleme yapabilir.

Kullanılan filtreler:

* Tümü
* İtalya
* Japonya
* Türkiye

Arama işlemleri gerçek zamanlı olarak çalışmaktadır.

---

## 💾 BÖLÜM 8: LocalStorage Kullanımı

Kullanıcının seçtiği tema bilgisi LocalStorage üzerinde saklanmaktadır.

Sayfa yeniden açıldığında kullanıcı tercihleri korunmaktadır.

Kullanılan metodlar:

* localStorage.setItem()
* localStorage.getItem()

---

## 🌙 BÖLÜM 9: Kullanıcı Deneyimi Özellikleri

Proje içerisinde kullanıcı deneyimini artıran ek özellikler bulunmaktadır.

### Dark Mode

Kullanıcı tek tuşla koyu tema ve açık tema arasında geçiş yapabilmektedir.

### Toast Bildirimleri

* Tarif Eklendi
* Tarif Güncellendi
* Tarif Silindi

işlemlerinde kullanıcıya anlık geri bildirim verilmektedir.

### Loading Ekranı

API'den veri beklenirken yükleniyor mesajı gösterilmektedir.

---

## 📱 BÖLÜM 10: Responsive Tasarım

Uygulama:

* Masaüstü
* Tablet
* Mobil

ekran boyutlarına uyumlu olacak şekilde geliştirilmiştir.

CSS Grid yapısı kullanılarak kartlar otomatik olarak yeniden hizalanmaktadır.

---

## 🚀 GitHub Yayını

Proje GitHub üzerinde public repository olarak paylaşılmıştır.

Klasör Yapısı:

GastroAtlas/

├── index.html

├── style.css

├── app.js

└── README.md

---

## 🎯 Ödev Gereksinimleri Kontrol Listesi

✔ Fetch API

✔ Async/Await

✔ DOM Manipulation

✔ Event Listener

✔ Veri Listeleme

✔ Veri Ekleme

✔ Veri Güncelleme

✔ Veri Silme

✔ Responsive Tasarım

✔ Arama Sistemi

✔ Dark Mode

✔ Loading

✔ Toast Mesajları

✔ LocalStorage
