import React from 'react';
import HeroSection from '../components/HeroSection';
import ContentBox from '../components/ContentBox';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      
      <div id="content">
        <ContentBox 
          image="https://scontent.fbts7-1.fna.fbcdn.net/v/t39.30808-6/476838494_1016286210524181_8318836711322266520_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ApwEcbDNA9QQ7kNvwG28_CK&_nc_oc=Adm6ybVGGAZQW53I1Iv13ZMsqjb-MNHeEGKAVzwmNbQJfuKUnMMJ35MUplDReCRkvHg&_nc_zt=23&_nc_ht=scontent.fbts7-1.fna&_nc_gid=4obK63xPQoSLihJFb9aLTQ&oh=00_AfLOSck0ecTUKKBCTRCRED40y09jgDG7gC7LqtkCIF2EQA&oe=683DE623" 
          title="Športový klub" 
          buttonText="O nás" 
          buttonLink="/o-nas" 
        />
        
        <ContentBox 
          image="https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/35864520_2422757584404762_5795511423341690880_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=ssI21TK-UjMQ7kNvwFKz6cl&_nc_oc=Adnw0dxg0oxVUs5jAAM_OM0An2hTbg3CBT5kDxVw91JjZOEa4uhsN3_6RzgSzkc1zS4&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=uxSUXQNFleMHIQjgxJwoXQ&oh=00_AfJ1gy-qj48H0eLY9dKe-O3_SQ_y_GmIwNXq6mYoPkgqcQ&oe=685FE654" 
          title="Chcete si zahrať?" 
          buttonText="Viac info" 
          buttonLink="/objednat" 
          reverse={true}
        />
      </div>
    </div>
  );
};

export default HomePage;