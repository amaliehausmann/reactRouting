import { PageTitle } from "../components/PageTitle/PageTitle";
import { Hero } from "../components/Hero/Hero";
import { GriddedSection } from "../components/GriddedSection/GriddedSection";
import { SectionContent } from "../components/GriddedSection/GriddedContent/SectionContent";
import { SectionImage } from "../components/GriddedSection/GriddedContent/SectionImage";

export function Home() {
  return (
    <div>
      <PageTitle pageTitle="Hjem"></PageTitle>
      <Hero></Hero>
      <GriddedSection>
        <SectionContent
          title="Oplev Tidløs Luksus og Raffineret Håndværk"
          textOne="Velkommen til en verden, hvor tid er mere end bare et øjeblik; det er en kunstform. Hos NobleTime stræber vi efter at bringe dig ure, der ikke kun måler tiden, men også fortæller en historie om tidløs elegance og uovertruffen håndværk. Vores kollektion er nøje kurateret for at imødekomme dem, der søger det ekstraordinære – dem, for hvem et ur ikke bare er et tilbehør, men en erklæring om stil og klasse."
          textTwo="Hvert ur i vores kollektion er skabt med en omhyggelig opmærksomhed på detaljer, fra det fineste materiale til den mest avancerede teknologi. Vi samarbejder med verdens førende urmagere for at sikre, at hvert stykke er et mesterværk i sig selv, designet til at holde i generationer. Vores ure er ikke bare skabt for i dag; de er designet til at blive værdsat og videregivet som arv."
          styling="timelessLuxury"
        ></SectionContent>
        <SectionImage image="rolex.jpg" styling="timelessLuxury"></SectionImage>
      </GriddedSection>
      <GriddedSection>
        <SectionImage image="ur2.jpg" styling="heritage"></SectionImage>
        <SectionContent
          title="Vores Arv: En Historie om Tidløs Kvalitet"
          textOne="Hos NobleTime er vores historie dybt forankret i en tradition for uovertruffen kvalitet og håndværk. Siden vores begyndelse har vi dedikeret os til at skabe ure, der ikke blot måler tid, men som også fortæller en historie om elegance, præcision og varig værdi. Vores arv er bygget på en passion for det fineste håndværk og en kompromisløs stræben efter perfektion i hver eneste detalje."
          textTwo="Vores historie handler om mere end blot ure – det er en fortælling om passion og håndværk. Gennem årene har vi fortsat med at perfektionere vores teknikker, og vi har altid holdt fast i vores grundlæggende principper om kvalitet og elegance. Vores kunder kan være sikre på, at hvert ur, de bærer, bærer med sig arven af vores historie, vores værdier, og vores forpligtelse til at levere det absolut bedste."
          styling="heritage"
        ></SectionContent>
      </GriddedSection>
    </div>
  );
}
