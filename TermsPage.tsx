import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <div className="pt-24 pb-16 bg-devil-black text-devil-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl text-devil-red mb-4">Obchodné podmienky</h1>
          <div className="w-24 h-1 bg-devil-orange mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-devil-dark p-8 rounded-lg shadow-lg text-devil-light space-y-8">
            <section>
              <h2 className="font-display text-2xl text-devil-orange mb-4">1. Všeobecné ustanovenia</h2>
              <p className="mb-4">
                Tieto obchodné podmienky upravujú práva a povinnosti DEVILS Paintball Klub, so sídlom na adrese [adresa], IČO: [IČO] (ďalej len "poskytovateľ") a zákazníka (ďalej len "objednávateľ") pri poskytovaní služieb v oblasti paintballu a iných voľnočasových aktivít.
              </p>
              <p>
                Odoslaním objednávky objednávateľ potvrdzuje, že sa oboznámil s týmito obchodnými podmienkami a súhlasí s nimi.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl text-devil-orange mb-4">2. Objednávka a rezervácia termínu</h2>
              <p className="mb-4">
                Objednávku je možné uskutočniť prostredníctvom online formulára na webovej stránke, telefonicky alebo emailom. Rezervácia termínu je platná až po jej potvrdení poskytovateľom a zaplatení zálohy.
              </p>
              <p className="mb-4">
                Záloha vo výške 50% z celkovej ceny musí byť uhradená najneskôr 7 dní pred dohodnutým termínom. Zvyšných 50% ceny je objednávateľ povinný uhradiť v deň konania akcie.
              </p>
              <p>
                Poskytovateľ si vyhradzuje právo na zmenu termínu v prípade nepriaznivého počasia alebo iných okolností, ktoré by mohli ohroziť bezpečnosť účastníkov.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl text-devil-orange mb-4">3. Storno podmienky</h2>
              <p className="mb-4">
                Objednávateľ má právo zrušiť objednávku za nasledovných podmienok:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Zrušenie viac ako 14 dní pred termínom: vrátenie 100% zálohy</li>
                <li>Zrušenie 7-14 dní pred termínom: vrátenie 50% zálohy</li>
                <li>Zrušenie menej ako 7 dní pred termínom: záloha prepadá v prospech poskytovateľa</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl text-devil-orange mb-4">4. Bezpečnosť a zodpovednosť</h2>
              <p className="mb-4">
                Objednávateľ a všetci účastníci sú povinní dodržiavať bezpečnostné pokyny poskytovateľa. Účasť na aktivitách je na vlastné riziko.
              </p>
              <p className="mb-4">
                Poskytovateľ nezodpovedá za úrazy a škody spôsobené nedodržaním bezpečnostných pokynov alebo požitím alkoholu či iných omamných látok.
              </p>
              <p>
                Osoby mladšie ako 18 rokov sa môžu zúčastniť len s písomným súhlasom zákonného zástupcu.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl text-devil-orange mb-4">5. Záverečné ustanovenia</h2>
              <p className="mb-4">
                Tieto obchodné podmienky sú platné od 1.1.2023. Poskytovateľ si vyhradzuje právo na zmenu týchto podmienok.
              </p>
              <p>
                Akékoľvek spory vzniknuté na základe týchto obchodných podmienok budú riešené podľa právneho poriadku Slovenskej republiky.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;