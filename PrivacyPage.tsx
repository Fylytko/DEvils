import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <div className="pt-24 pb-16 bg-devil-black text-devil-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl text-devil-red mb-4">Ochrana osobných údajov</h1>
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
              <h2 className="font-display text-2xl text-devil-orange mb-4">1. Prevádzkovateľ osobných údajov</h2>
              <p>
                Prevádzkovateľom osobných údajov je DEVILS Paintball Klub, so sídlom [adresa], IČO: [IČO] (ďalej len "prevádzkovateľ").
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl text-devil-orange mb-4">2. Kategórie osobných údajov</h2>
              <p className="mb-4">
                Prevádzkovateľ spracúva nasledovné osobné údaje:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identifikačné údaje (meno, priezvisko)</li>
                <li>Kontaktné údaje (e-mail, telefónne číslo)</li>
                <li>Údaje o rezervácii (termín, počet osôb, vybraná aktivita)</li>
                <li>Platobné údaje pri úhrade zálohy alebo celkovej ceny</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl text-devil-orange mb-4">3. Účel spracúvania osobných údajov</h2>
              <p className="mb-4">
                Osobné údaje sú spracúvané na nasledovné účely:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Spracovanie objednávky a rezervácie</li>
                <li>Plnenie zákonných povinností prevádzkovateľa</li>
                <li>Komunikácia so zákazníkom</li>
                <li>Zasielanie informácií o akciách a novinkách (len so súhlasom)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl text-devil-orange mb-4">4. Doba uchovávania osobných údajov</h2>
              <p>
                Osobné údaje sú uchovávané počas trvania zmluvného vzťahu a následne po dobu nevyhnutnú na ochranu práv prevádzkovateľa a plnenie zákonných povinností, najdlhšie však po dobu 5 rokov od ukončenia zmluvného vzťahu.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl text-devil-orange mb-4">5. Práva dotknutej osoby</h2>
              <p className="mb-4">
                Ako dotknutá osoba máte nasledovné práva:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Právo na prístup k osobným údajom</li>
                <li>Právo na opravu osobných údajov</li>
                <li>Právo na vymazanie osobných údajov</li>
                <li>Právo na obmedzenie spracúvania osobných údajov</li>
                <li>Právo namietať proti spracúvaniu osobných údajov</li>
                <li>Právo na prenosnosť údajov</li>
                <li>Právo odvolať súhlas so spracúvaním osobných údajov</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl text-devil-orange mb-4">6. Kontaktné údaje</h2>
              <p>
                V prípade otázok týkajúcich sa ochrany osobných údajov nás môžete kontaktovať na e-mailovej adrese info@paintballdevils.sk alebo poštou na adrese [adresa].
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;