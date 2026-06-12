import { useTranslation } from "react-i18next";

function Section() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <p>{t("You can  change the language by simply clicking the button above. /Vous pouvez changer la langue en cliquant simplement sur le bouton ci-dessus /يمكنك تغيير اللغة بمجرد النقر على الزر في الأعلى")}</p>
      <ul>
        <h1>Group A 2025</h1>
           <li>Ali Mamane Jagana (2024/2025) 500$ ✅</li>
        <li>Sulayman Janjume Jagana (2024/2025) 500€ ✅</li>
        <li>Bacary Hatou Jagana (2024/2025) 500€ ✅</li>
        <li>Papa Maleme Jagana 2024 500$ ✅</li>
        <li>Baseru Tabia Jagana (2024/2025) 500€ ✅</li>
        <li>Malamin Essa Jagana 2024 500€ ✅</li>
        <li>MAlamin Ali Jagana (2024/2025) 500$ ✅</li>
        <li>Lassa kinda Jagana 2024 500€ ❌</li>
        

          <h1>Spending 2025</h1>
       
          <p>Statement Summary (25 May 2025)</p>
             <li>Rice: 30 bags @ 2,150 Dallas each  Total: 64,500 Dallas</li>
              <li>Sugar: 5 bags @ 2,500 Dallas each  Total: 12,500 Dallas Subtotal (Rice + Sugar): 77,000 Dallas</li>
               <li>Meat: Total amount 33,880 Dallas</li>
               <p>Statement Summary (16 September 2025)</p>
                <li>Kacho Spending: 37,775 Dallas</li>
                <li>Balance: 15,900 GMD</li>
                <li> <strong> all in totall:</strong> now 98,000 Dallas </li>
                 
        <h1>Spending 2026</h1>
         <li> Rice: 30 bags  @ 1.750  Dallas each totall: 52.500 GMD  </li>
        <li>  Suger: 15 bags @ 2.350  Dallas each totall: 35.250 GMD</li>
        
        <li>Balance: 10.250 GMD</li>
       <li> Ramadan Spending 20.500: Dallas</li>


        
    


          
          
         

        <h1>Group B 2025</h1>
        <li>Banuma Jagana (2024/2025) 500$ ✅</li>
        <li> Bacary Numa Jagana (2024/2025) 500€ ✅</li>
        <li>Malamin Tabia Jagana (2024/2025) 500€ ✅</li>
        <li>Ansuma Hatu Jagana (2024/2025) 500€ ❌</li>
        <li>Osman Tabia Jagana (2024/2025) 500€ ✅</li>
        <li>Malamin Kulle Jagana (2024/2025) 500$ ❌</li>
        <li>Lassana Kulle Jagana (2024/2025) 500$ ❌</li>
        <li>Ebrahima Gana (2024/2025) 500$ ❌</li>
        <li>Mahmud Essa (2024/2025) 500€ ✅</li>
       
       <h1>Group A 2026 </h1>
       
       <h1>Group B 2026</h1>

                 <h1>Spending  for 2025</h1>

                 <li> 30.000 GMD for meate</li>


      </ul>
      <h1>2026 Balance: 25,750 GMD</h1>
    </section>
  );
}

export default Section;
