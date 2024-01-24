
import React, { useState, useEffect } from 'react';
import './App.css';

const imagePaths = [
  'https://haberdairesi.com/d/news/74223.jpg',
  'https://i.hakimiyet.com/c/90/1746x984/s/dosya/haber/meram-belediyesi-nin-yeni-nesi_1674461883_TrN2CV.JPG',
  'https://www.meram.bel.tr/upload/medya/1_102.jpg',
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagePaths.length) % imagePaths.length);
  };

  return (
    <div className="app">
      <header>
        <img src="https://www.meram.bel.tr/assets/img/logo.svg" alt="Logo" className="logo" />
        <h1>Meram'dan Haberler</h1>
        </header>
      <nav>
        <ul>
          <li><a href="#">Fotoğraflar</a></li>
          <li><a href="#">Hakkında</a></li>
          <li><a href="#">Bize Ulaşın</a></li>
        </ul>
        
      </nav>
      <main>
        <div className="photo-section">
          <div className="galeri-header">Galeri</div>
          <img
            src={imagePaths[currentImageIndex]}
            alt={`Photo ${currentImageIndex + 1}`}
            className="photo"
          />

          <div className="nav-buttons">
            <span className="arrow" onClick={prevImage}>&#8249;</span>
            <span className="arrow" onClick={nextImage}>&#8250;</span>
          </div>

          <div className="dots">
            {imagePaths.map((_, index) => (
              <span
                key={index}
                className={index === currentImageIndex ? 'dot active' : 'dot'}
                onClick={() => changeImage(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="column-section">
    <div className="column">
      <a href="https://www.meram.bel.tr/upload/medya/5_237.jpg">
        <img src="https://www.meram.bel.tr/upload/medya/5_237.jpg" alt="Image 1" />
      </a>
      <p>
DOSD Meram ocak ayı seminerinde “Çocukluk dönemi özel eğitimde ‘biz’olabilme yolculuğu” anlatıldı. Necmettin Erbakan Üniversitesi Öğretim Üyesi Doç. Dr. Rukiye Konuk Er tarafından verilen seminere aileler ilgi gösterdi. Meram Down Sendromlu Bireyler Yaşam Destek Merkezi DOSD Meram’da, her ay periyodik olarak gerçekleştirilen aile seminerleri çerçevesinde ocak ayının konusu “Erken Çocukluk Dönemi Özel Eğitimde ‘Biz’ Olabilme Yolculuğu” anlatıldı. Özel bireylerin aileleri tarafından bir hayli ilgi gören seminer Necmettin Erbakan Üniversitesi Ahmet Keleşoğlu Eğitim Fakültesi Özel Eğitim Bölümü Zihin Engelliler Eğitimi Anabilim Dalı Öğretim Üyesi Doç. Dr. Rukiye Konuk Er tarafından verildi. </p>
    </div>
    <div className="column">
      <a href="https://www.meram.bel.tr/upload/medya/5_236.jpg">
        <img src="https://www.meram.bel.tr/upload/medya/5_236.jpg" alt="Image 2" />
      </a>
      <p>
Türkiye’de yürütülen en büyük ihya projelerinden Darü’l-Mülk Projesi kapsamında Konya Büyükşehir Belediyesi ve Meram Belediyesi iş birliğiyle hayata geçirilen “Büyük Larende Dönüşümü”nde, tamamlanan yeni iş yerleri için kuralar çekildi.

Tantavi Kültür Merkezi’nde düzenlenen programın açılışında konuşan Meram Belediye Başkanı Mustafa Kavuş, çerçevesini ‘Konya Modeli Belediyecilik’ anlayışının çizdiği ve Konya Büyükşehir Belediye Başkanı Uğur İbrahim Altay’ın önderliğinde şehre ve insana yapılan her yatırımın bu değere artı değer kattığını ifade ederek, “Bugün kuraları çekilecek dükkanlar da bunlardan birisi. Ancak ben çekilecek kuraların da yeni yapılacak iş yerlerinin de Konya’ya yeni bir yatırım kazandırmaktan daha derin anlamlar taşıdığına inanıyorum. Hem Şükran Kentsel Dönüşüm Projesi’nin hem de Darü’l-Mülk Projesi’nin bir parçası olan bu yatırım esas itibariyle öncelikle belediyelerimiz olmak üzere tüm kurum ve kuruluşların, tüm hemşehrilerimizle birlikte ortaya koyduğu müthiş birlik ve beraberliğin kanıtıdır” diye konuştu.</p>
    </div>
    <div className="column">
      <a href="https://www.meram.bel.tr/upload/medya/9_118.jpg">
        <img src="https://www.meram.bel.tr/upload/medya/9_118.jpg" alt="Image 3" />
      </a>
      <p>
Meram Mehmet Kadir Özgüzar İlkokulu öğrencileri, yarıyıl karnelerini Meram Belediye Başkanı Mustafa Kavuş’un elinden aldılar. Kavuş, öğrencilere tatil döneminde iyi dinlenmeleri, eksiklerini gidermeleri ve kitap okumaları tavsiyesinde bulunarak karne hediyesi verdi. Meram Belediye Başkanı Mustafa Kavuş, Mehmet Kadir Özgüzar İlkokulu öğrencilerinin 2023-2024 eğitim öğretim yılı ara karne heyecanlarına ortak oldu. Karne dağıtımında Başkan Kavuş’a Meram İlçe Milli Eğitim Şube Müdürleri Ayşe Kalay ve Ahmet Kocagöz de eşlik etti. Okul Müdürü Zeki Turhan, Başkan Mustafa Kavuş’a okulu gezdirerek, bilgi verdi. Karne dağıtımı öncesinde okulda görev yapan öğretmenlerle bir araya gelen Başkan Kavuş, onlarla bir süre sohbet etti.

</p>
    </div>
  </div>
  <div className="biography-section">
    <div className="biography-text">
      <h2>Mustafa Kavuş</h2>
      <p>
      Öğrenim hayatına Ali İhsan Dayıoğlugil İlkokulu'nda başlayan Mustafa KAVUŞ, orta ve lise öğrenimini ise Konya İmam Hatip Lisesi’nde bitirdi. 1995 yılında kazandığı Ankara Üniversitesi Siyasal Bilgiler Fakültesi İşletme Bölümü’nü başarıyla tamamlamasının ardından Selçuk Üniversitesi Yönetim Organizasyon Ana Bilim Dalı’nda yüksek lisans eğitimi aldı. Mustafa KAVUŞ, eğitim hayatının yanı sıra küçük yaştan itibaren iş hayatı tecrübesi kazanmaya çalıştı. Tekstil, yayınevi ve gıda sektörlerinde işletmecilik ve yöneticilik yaptı.

Tüm bu çalışmalarının yanında siyasete de ilgi duyan Mustafa KAVUŞ, AK Parti ile başladığı siyasi yaşamında 2001-2003 yılları arasında AK Parti İl Gençlik Kolları Kurucu Teşkilatlanma Başkanı olarak görev yaptı. Siyasi tecrübesini 2003-2005 yıllarında İl Teşkilatı Yönetim Kurulu Üyesi olarak sürdüren KAVUŞ, 2011 genel seçimlerinde milletvekili aday adayı oldu.

 2004 yılında Konya Büyükşehir Belediyesi Başkanlık danışmanlığına getirilen KAVUŞ, 2006’da Teftiş Kurulu Müfettişliği’ne atandı. 2009 yılında getirildiği Teftiş Kurulu Başkanlığını 2018 yılına kadar sürdürdü. Çevre ve Şehircilik Bakanlığı’nda Bakan Müşaviri olarak görev yapmakta iken aday adaylığı başvurusu için istifa etti.

31 Mart 2019 yerel seçimlerinde Meram Belediye Başkanı seçilen Mustafa KAVUŞ evli ve iki çocuk babasıdır.
      </p>
    </div>
  </div>
      </main>
      <footer>
        <p>&copy; 2024 Meram Belediyesi &#169; Zeliha Değer Bitirme Ödevi</p>
        <div className="footer-links">
          <a href="https://www.facebook.com/Meram.Belediyesi" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/MeramBelediyesi" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.instagram.com/meram.belediyesi/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
