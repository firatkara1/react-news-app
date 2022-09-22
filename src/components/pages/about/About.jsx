import React from "react";
import "./about.css";
import myPhoto from "./images/myPhoto.jpg";
function About() {
  return (
    <div className="about-container">
      <div className="profile">
        <img className="profile-img" src={myPhoto} alt="firat-kara" />
        <h2>Merhabalar 👋</h2>
        <p className="intro">
          Ben Fırat. Aksaray Üniversitesi Yönetim Bilişim Sistemleri bölümü
          mezunuyum. Analitik düşünen, problem çözmeyi seven ve insanlara
          yardımcı olmaktan mutluluk duyan birisiyim. Küçüklüğümden beridir
          bilgisayarlara, teknolojiye olan merakım ve lisede iken yazılıma merak
          sarmam; beni bilişim ve yazılım eğitimi alabileceğim Yönetim Bilişim
          Sistemleri bölümünü tercih etmeye yöneltti. Öğrenmeye ve yeni şeyler
          keşfetmeye her zaman açığım. Mobil ve web geliştirme alanında kendimi
          geliştirmeye devam ediyorum. Her iki alanda da çalışmaya açığım.
          Öğrendiğim sistemleri ve teknolojileri gerçek hayat projelerinde
          kullanabilmek için tam zamanlı çalışmak istiyorum.
        </p>
      </div>
      <hr />
      <div className="skills">
        <h2>Yeteneklerim</h2>
        <div className="skill-row">
          <h3>Web & Mobil Geliştirme</h3>
          <p>
            Nesne yönelimli programlama öğrenmeye Java dili ile başladım.
            Java'yı öğrenirken android platformu için mobil uygulamalar
            geliştirdim ve yayımladım. Web geliştirmede ise front-end tarafında
            React.js, back-end tarafında ise Node.js teknolojilerini kullanıp
            projeler geliştirdim. Şu anda ise back-end tarafı için Spring
            framework öğrenmeye devam ediyorum. Bütün bunları yaparken çok
            eğleniyorum.
          </p>
        </div>
        <hr />
        <h2>Projelerim</h2>
        <div className="skill-row">
          <h3> React Ehliyet Soru Uygulaması</h3>
          <p>
            Java ile geliştirdiğim mobil uygulamayı React ile web dünyasına
            taşıyorum. React ile geliştirmeye devam ettiğim bu uygulama,
            uygulamanın android versiyonunda kullandığım Firebase veri tabanı
            ile ortak çalışmaktadır.
          </p>
          <h3> React Hava Durumu Uygulaması</h3>
          <p>
            React Context API kullanarak geliştirmiş olduğum uygulamada
            Türkiye'nin tüm illerinin bir haftalık hava durumu raporu
            görüntülenebilmektedir. Dilerseniz konum bilgilerinize izin vererek
            bulunduğunuz konum hakkında da haftalık hava durumu raporunu
            görüntüleyebilirsiniz.
          </p>
          <h3>Sırlar Uygulaması</h3>
          <p>
            Uygulama, ExpressJs ve MongoDb kullanılarak oluşturulmuştur.
            Kullanıcıların hesap oluşturabileceği, uygulamaya giriş yapabileceği
            ve sırlarını paylaşabileceği bir uygulama.
          </p>
          <h3>Ehliyet Soru Uygulaması</h3>
          <p>
            Ehliyet yazılı sınavına hazırlanan kişiler için yaptığım dinamik ve
            native bir uygulama. Java diliyle 3 ay gibi bir zamanda yaptım. Veri
            tabanı olarak Firebase teknolojisini kullandım. Bu uygulamayı
            geliştirirken Java diline dair önemli nitelikleri kendime kattım.
          </p>
          <h3>Stok Takip Uygulaması</h3>
          <p>
            Asp.net Mvc ile geliştirmiş olduğum bu web projesi, işletmelerin
            ürün stoklarını takip edebilmelerini sağlıyor. Veri tabanı olarak
            MsSQL Server kullandım. Bu uygulamayı geliştirirken server-side
            mimarisini daha iyi kavramış oldum.
          </p>
          <h3>Instagram Klonu</h3>
          <p>
            Bu uygulama Java ile yapılmıştır. Kullanıcılar, fotoğraf ve fotoğraf
            açıklaması yazarak durumlarını paylaşabilir. Java dilini ve android
            ortamını temel seviyede öğrenirken geliştirmiş olduğum uygulamadır.
            Veri tabanı kısmında Firebase teknolojisini kullandım.
          </p>
        </div>
      </div>
      <hr />
      <div className="contact-me">
        <h2>İletişim 👨‍💻</h2>
        <p className="contact-message">
          Hakkımda daha fazla bilgi edinmek ve tanışmak için benimle iletişime
          geçebilirsin.
        </p>
        <a className="btn" href="mailto:firatkara8@hotmail.com">
          Benimle iletişime geç
        </a>
      </div>
    </div>
  );
}

export default About;
