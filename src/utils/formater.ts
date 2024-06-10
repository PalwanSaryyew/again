export function priceFormater<T extends number>(miktar: T, ondalikBasamakSayisi?: number, ayrac?: string, ondalikNoktasi?: string): string {

    // Virgül ayracı ve ondalık noktası varsayılan değerleri
    ayrac = ayrac || " ";
    ondalikNoktasi = ondalikNoktasi || "";
  
    // Ondalık basamak sayısını sabitle
    ondalikBasamakSayisi = ondalikBasamakSayisi || 0;
  
    // Sayıyı ondalıklı hale getir ve ondalık basamakları ayarla
    const fiyat: string = miktar.toFixed(ondalikBasamakSayisi);
  
    // Ondalık kısmı ayır
    const ondalikKism: string = fiyat.split(".")[1] || "";
  
    // Binlik basamakları virgülle ayır
    const binlikKism: string = fiyat.split(".")[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${ayrac}`);
  
    // Biçimlendirilmiş fiyatı oluştur
    const bicimlendirilmisFiyat: string = `${binlikKism}${ondalikNoktasi}${ondalikKism}`;
  
    return bicimlendirilmisFiyat;
  }
  
  export function ucFormater<T extends number>(miktar: T,  ayrac?: string, ondalikNoktasi?: string): string {

    // Virgül ayracı varsayılan değeri
    ayrac = ayrac || " ";
    
    // Sayıyı dize haline getir
    const fiyat: string = miktar.toString();
  
    // Binlik basamakları virgülle ayır
    const binlikKism: string = fiyat.split(".")[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${ayrac}`);
    
    return binlikKism;
  }