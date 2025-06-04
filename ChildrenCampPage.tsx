import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Award, Zap, ShieldCheck } from 'lucide-react';

const ChildrenCampPage = () => {
  return (
    <div className="pt-24 pb-16 bg-devil-black text-devil-light">
      <div className="relative overflow-hidden">
        <div className="bg-cover bg-center h-96 relative" style={{ backgroundImage: "url('https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/472919979_993593606126775_4607449916852059006_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_JdtR30B7_sQ7kNvwFas6K-&_nc_oc=Adk2VMOayvbfGGvZ5BUBWCm7M6RBj1oXCEyAnLbXOA3D5I3Eii7wW9ojJuZ1nhUJmi8&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=V_2fVFQPKxCab9BaWMB74Q&oh=00_AfIAgwYj7ec3jIqf05KL_EfXAylmmujcE8V7MhMZvt4lbA&oe=683F5B9F')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-devil-black/70 via-devil-black/70 to-devil-black"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-5xl md:text-6xl text-devil-red mb-4">Detský vojenský tábor</h1>
              <p className="text-xl text-devil-light max-w-xl mx-auto">
                Odthnite vase diet'a od virtuálnei reality a vrátime ho do sveta sportu,
zábavy a dobrodruzstva.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-display text-3xl text-devil-red mb-8 text-center">Prázdninový tábor pre mladých dobrodruhov</h2>
          
          <div className="bg-devil-dark p-8 rounded-lg shadow-lg mb-12">
            <p className="text-devil-light mb-6">
              Detský tábor DEVILS je určený pre deti od 8 do 15 rokov, ktoré rady športujú, objavujú nové veci a chcú si užiť prázdniny plné dobrodružstva. Tábor je zameraný na outdoor aktivity, teambuilding a rozvoj taktického myslenia prostredníctvom rôznych hier.
            </p>
            <p className="text-devil-light">
              Tábor vedú skúsení animátori a inštruktori, ktorí zabezpečujú im bohatý program, bezpečnosť a starostlivosť. Deti sú rozdelené do skupín, aby boli aktivity prispôsobené ich schopnostiam a záujmom.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="font-display text-2xl text-devil-orange mb-6">Informácie o tábore</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Calendar size={24} className="text-devil-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Termíny 2025</h4>
                    <p className="text-gray-300">
                      1. turnus: 7.7. - 11.7.2025<br />
                      2. turnus: 21.7. - 25.7.2025<br />
                      3. turnus: 11.8. - 15.8.2025
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={24} className="text-devil-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Miesto konania</h4>
                    <p className="text-gray-300">Kalinkovo Paintball Devils</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={24} className="text-devil-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Dĺžka tábora</h4>
                    <p className="text-gray-300">5 dní (pondelok - piatok)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck size={24} className="text-devil-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Bezpečnosť</h4>
                    <p className="text-gray-300">Všetky aktivity pod dohľadom inštruktorov</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-2xl text-devil-orange mb-6">Program tábora</h3>
              <div className="bg-devil-dark p-6 rounded-lg border border-devil-red">
                <h4 className="text-xl font-display text-center text-devil-light mb-4">Aktivity v tábore</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Paintball / Airsoft</li>
                  <li>Misie</li>
                  <li>Rybolov</li>
                  <li>Tímové hry a súťaže</li>
                  <li>Lukostrelba</li>
                  <li>Výlety do okolia</li>
                  <li>Táborová olympiáda</li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h4 className="font-display text-xl text-devil-orange mb-4">Cena: 200€</h4>
                <p className="text-gray-300 mb-4">V cene je zahrnuté:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Plná penzia (5x denne) a pitný režim</li>
                  <li>Kompletný program</li>
                  <li>Odborní inštruktori a animátori</li>
                  <li>Strelivo</li>
                  <li>Oblečenie a ochrana</li>
                </ul>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-display text-2xl text-devil-red mb-6 text-center">Prečo vybrať náš tábor?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-devil-dark p-6 rounded-lg text-center">
                <Zap size={36} className="text-devil-orange mx-auto mb-3" />
                <h4 className="font-display text-xl text-devil-light mb-2">Jedinečný program</h4>
                <p className="text-gray-300">
                  Ponúkame aktivity, ktoré v bežných táboroch nenájdete, zamerané na akčné hry a rozvoj tímovej spolupráce.
                </p>
              </div>
              <div className="bg-devil-dark p-6 rounded-lg text-center">
                <Award size={36} className="text-devil-orange mx-auto mb-3" />
                <h4 className="font-display text-xl text-devil-light mb-2">Skúsení vedúci</h4>
                <p className="text-gray-300">
                  Naši inštruktori sú profesionáli s dlhoročnými skúsenosťami v práci s deťmi a v oblasti akčných športov.
                </p>
              </div>
              <div className="bg-devil-dark p-6 rounded-lg text-center">
                <ShieldCheck size={36} className="text-devil-orange mx-auto mb-3" />
                <h4 className="font-display text-xl text-devil-light mb-2">Bezpečnosť na prvom mieste</h4>
                <p className="text-gray-300">
                  Všetky aktivity prebiehajú pod dohľadom skúsených inštruktorov a s dôrazom na bezpečnosť detí.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img 
              src="https://scontent.fbts7-1.fna.fbcdn.net/v/t1.6435-9/110314320_4622572771089888_3054922315829638932_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=buCAv_BLcfIQ7kNvwEq0CKV&_nc_oc=Adn7Hp-qL09GJEHflxOUd3JTAVqPnFw1VGRuB4KIq0-sfyEc0V4-Ff4nz6xp_tqZTr0&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=yNj094K4ad37u_DxbVblzQ&oh=00_AfK3TXLiCd07CJH4k-AHnVoa2ujpE_OhA_mLHB5MZ4qqMA&oe=6860CC67" 
              alt="Detský tábor 1" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://scontent.fbts7-1.fna.fbcdn.net/v/t1.6435-9/117312660_4723120491035115_6763518433033594599_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=i6Rw5pcyGkEQ7kNvwHYtGeq&_nc_oc=Adlc0uPBY3zEcz6WraJvjVCjAU3K96kztU0l1gCG5kfWwlrBOB0hdTLdPkvy5WUkQ_M&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=cTg4NJRa07rvFWB3YjqKhA&oh=00_AfI6xeM5BFf8Mk6t8YLwi0Z-7BD_8zA178bufswgP1dOLA&oe=6860DCB3" 
              alt="Detský tábor 2" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/491832331_29941998485387301_1684320834454360325_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Q3pFSgshXyMQ7kNvwGr715P&_nc_oc=AdmELqc8_-TQiso4PpYc_tXMVS8qn-OFmWBScHGAWqZYrQp_H49m3xpTmO8I6Q6naNw&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=3pZlcJuWHuWBZdoz35yBgQ&oh=00_AfLqUrcQBHMN-CWBEIS5fbUP-gswrnY1-wM-V63d2104ng&oe=683F644F" 
              alt="Detský tábor 3" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="font-display text-3xl text-devil-red mb-6 text-center">Rezervujte miesto</h2>
          <div className="max-w-xl mx-auto bg-devil-dark p-8 rounded-lg shadow-lg">
            <p className="text-center mb-6">
              Kapacita táborov je obmedzená, preto odporúčame rezervovať miesto čo najskôr. Pre viac informácií alebo rezerváciu nás kontaktujte.
            </p>
            <a href="/objednat" className="block w-full py-3 bg-devil-red hover:bg-devil-orange text-white font-medium rounded-md transition-colors duration-300 text-center">
              Rezervovať miesto
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChildrenCampPage;