const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
  client.user.setActivity('!comandos', { type: 'LISTENING' });
  
  
});
client.on("message", (message) => {
  if (message.content===("!puestada")) {
    message.channel.send("con toda la puestada con toda la puestada ayer pille dossss y hoy otros doossss",{files:["./image/puestadaa.gif"]});
  }
  /*if (message.content===("!capitanes")){
    var random1=Math.floor(Math.random() * 10)+1;  
    var random2=Math.floor(Math.random()*10)+1;
    while (random1==random2){random2=Math.floor(Math.random()*10)+1;}
    message.channel.send("Los capitanes son:\n");
    switch(random1){
case 1:message.channel.send("Santi"+" (Comienza eligiendo miembros)");break;
case 2:message.channel.send("geno"+" (Comienza eligiendo miembros)");break;
case 3:message.channel.send("Tinnico"+" (Comienza eligiendo miembros)");break;
case 4:message.channel.send("MonsterWeed"+" (Comienza eligiendo miembros)");break;
case 5:message.channel.send("branca"+" (Comienza eligiendo miembros)");break;
case 6:message.channel.send("Tuki"+" (Comienza eligiendo miembros)");break;
case 7:message.channel.send("Emiliano"+" (Comienza eligiendo miembros)");break;
case 8:message.channel.send("clocken"+" (Comienza eligiendo miembros)");break;
case 9:message.channel.send("Max"+" (Comienza eligiendo miembros)");break;
case 10:message.channel.send("Adox"+" (Comienza eligiendo miembros)");break;
    }
   switch(random2){
    case 1:message.channel.send("Santi");break;
    case 2:message.channel.send("geno");break;
    case 3:message.channel.send("Tinnico");break;
    case 4:message.channel.send("MonsterWeed");break;
    case 5:message.channel.send("branca");break;
    case 6:message.channel.send("Tuki");break;
    case 7:message.channel.send("Emiliano");break;
    case 8:message.channel.send("clocken");break;
    case 9:message.channel.send("Max");break;
    case 10:message.channel.send("Adox");break;
   }
  }*/

if (message.content===("!capitanes")){
  message.channel.send("***\nEl comando !capitanes NO estara disponible hasta el 26/10/2019***");
}

  if (message.content===("!patada")){
    message.channel.send({files:["./image/tinnico.gif"]});
  }
  if(message.content===("!judio")){
    message.channel.send("Como vas a decir eso judio hijo de puta!!",{files:["./image/judio.gif"]});
  }
   if(message.content===("!inflacion")){
  message.channel.send( "La inflacion es siempre y en todo lugar un FENOMENO MONETARIO",{files:["./image/milei.jpg"]});
}

 /* if (message.content===("!comandos")){
    message.channel.send({embed: {
      color: 3447003,
      description: "__Los comandos actuales en el servidor son:__\n\n**!puestada\n!baja\n!inflacion\n!patada\n!host\n!limpiar\n!capitanes (solo disponible el 26/10/2019)\n!torneo\n!judio**"+
      "\n\n__NUEVOS COMANDOS:__\n\n**!F\n!sale\n!lindo**"
    }});

  }*/

  if (message.content===("!torneo")){
    message.channel.send("\n__**El torneo se llevara a cabo el dia 26/10/2019**__"+"\n\n__Integrantes Confirmados:__"+"\nSanti\ngeno\nTinnico\nMonsterWeed\nbranca\nTuki\nEmiliano\nclocken\nMax\nAdox"+"\n\n__Suplentes:__\nTiti\n2puntosbcorta");
  }
   
   if (message.content===("!host")){
    message.channel.send("\n__**Mi creador MonsterWeed ya me hosteo y ahora soy mas rapido y eficaz :yum:**__");
  }
   
   if(message.content===("!baja")){
  message.channel.send({files:["./image/baja.gif"]});
}  
   
if(message.content===("!limpiar")){
  message.channel.send("limpiando... \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nPantalla Limpia :page_facing_up: ");
  }
   
   

   
   //nuevos comandos (Alpha)
    
   if(message.content===("!lindo")){
       message.delete();
    message.channel.send("Segun "+message.author.toString()+ " el bebe mas hermoso de este servidor es:");
    var ran=Math.floor(Math.random() * 7)+1;
    var cuat=Math.floor(Math.random() * 4)+1;
    var tres=Math.floor(Math.random() * 3)+1;
    var cin=Math.floor(Math.random() * 5)+1;
    switch(ran){
      case 1:
          if(cuat==1){
          message.channel.send("Santi",{files:["./image/santi.jpg"]});
          }
          if(cuat==2){
          message.channel.send("Santi",{files:["./image/santi2.jpg"]});
        }
          if(cuat==3){
          message.channel.send("Santi",{files:["./image/santi3.jpg"]});
        }
          if(cuat==4){
          message.channel.send("Santi",{files:["./image/santi4.jpg"]});
        }
        break;
      case 2:
        if(tres==1){
          message.channel.send("geno",{files:["./image/geno.jpg"]});
        }
          if(tres==2){
          message.channel.send("geno",{files:["./image/geno2.jpg"]});
          }
          if(tres==3)
          {
          message.channel.send("geno",{files:["./image/geno3.jpg"]});
          }
        break;
      
      case 3:
        if(cin==1){
          message.channel.send("Maxi",{files:["./image/maxi.jpg"]});
        }
          if(cin==2){
          message.channel.send("Maxi",{files:["./image/maxi2.jpg"]});}
          if(cin==3){
          message.channel.send("Maxi",{files:["./image/maxi3.jpg"]});}
          if(cin==4){
        message.channel.send("Maxi",{files:["./image/maxi4.jpg"]});}
        if(cin==5){
        message.channel.send("Maxi",{files:["./image/maxi5.jpg"]});}
          break;
      case 4:
          if(cuat==1){
          message.channel.send("MonsterWeed",{files:["./image/yo.png"]});}
          if(cuat==2){
          message.channel.send("MonsterWeed",{files:["./image/yo2.gif"]});}
          if(cuat==3){
          message.channel.send("MonsterWeed",{files:["./image/yo3.gif"]});}
          if(cuat==4){
          message.channel.send("MonsterWeed",{files:["./image/yo4.gif"]});}
        break;
      
      case 5:
        if(cin==1){
          message.channel.send("branca",{files:["./image/branca.jpg"]});}
          if(cin==2){
          message.channel.send("branca",{files:["./image/branca2.jpg"]});}
          if(cin==3){
          message.channel.send("branca",{files:["./image/branca3.jpg"]});}
          if(cin==4){
          message.channel.send("branca",{files:["./image/branca4.jpg"]});}
          if(cin==5){
          message.channel.send("branca",{files:["./image/branca5.jpg"]});}
       break;
      
      case 6:
        
          if(tres==1){
          message.channel.send("Tuki",{files:["./image/tuki.jpg"]});}
          if(tres==2){
          message.channel.send("Tuki",{files:["./image/tuki2.jpg"]});}
          if(tres==3){
          message.channel.send("Tuki",{files:["./image/tuki3.jpg"]});}
      break;
      case 7:
       if(tres==1){
          message.channel.send("Tinnico",{files:["./image/tinnico.gif"]});}
          if(tres==2){
          message.channel.send("Tinnico",{files:["./image/tinnico2.png"]});}
          if(tres==3){
          message.channel.send("Tinnico",{files:["./image/tinnico3.jpg"]});}
   break;
     }
  } 
   
 if(message.content===("!sale")){
    message.delete();
    message.channel.send("**Sale o no sale?** "+message.author.toString())
    var sale=Math.floor(Math.random() * 10)+1;
    switch(sale){
      case 1:message.channel.send("No Sale",{files:["./image/nosale.png"]});break;
      case 2:message.channel.send("No Sale",{files:["./image/nosale.png"]});break;
      case 3:message.channel.send("No Sale",{files:["./image/nosale.png"]});break;
      case 4:message.channel.send("No Sale",{files:["./image/nosale.png"]});break;
      case 5:message.channel.send("No Sale",{files:["./image/nosale.png"]});break;
      case 6:message.channel.send("No Sale",{files:["./image/nosale.png"]});break;
      case 7:message.channel.send("No Sale",{files:["./image/nosale.png"]});break;
      case 8:message.channel.send("Sale",{files:["./image/sale.png"]});break;
      case 9:message.channel.send("Sale",{files:["./image/sale.png"]});break;
      case 10:message.channel.send("Sale",{files:["./image/sale.png"]});break;
    }
  }
  
   
   if(message.content===("!F")){
  message.channel.send(message.author.toString()+" **Pays Respect To Tiquino**",{files:["./image/fres.jpg"]});
}
if(message.content===("!f")){
  message.channel.send("**PEDAZO DE CORNUDO ESCRIBI BIEN EL COMANDO ES: !F (con mayucula imbecil)**");
}

   
if (message.content===("!lanz")){
   message.delete();
 message.channel.send("[LNDC]©                                                                                                                     20/10/2019\n\n"+
 "__**Actualización v1.2**__\n\n"+
  "La administración se complace en presentar sus nuevos comandos al público.\n"+
  "-Nuevo sistema de errores de comandos. Al enviar un comando mal escrito la Administración le responderá con un mensaje de error (están evaluadas las excepciones de !!!!)\n"+
  "-Nuevo comando de !F\n"+ 
  "-Nuevo comando de !sale (este comando posee probabilidades)\n"+
  "-Nuevo comando de !lindo (este comando posee probabilidades)\n"+
  "-Lista de !comandos actualizada a la versión actual.\n\n"+
  "Agradecimientos especiales a: **Tinnico**"
  ); 
}
   
if (message.content.startsWith("!")&&message.content!==("!comandos")&&message.content!==("!baja")&&message.content!==("!puestada")&&message.content!==("!inflacion")&&message.content!==("!patada")
  &&message.content!==("!host")&&message.content!==("!limpiar")&&message.content!==("!capitanes")&&message.content!==("!torneo")&&message.content!==("!judio")&&message.content!==("!test")&&message.content!==("!sale")&&message.content!==("!lanz")
  &&message.content!==("!F")&&message.content!==("!f")&&message.content!==("!lindo")&&!message.content.startsWith("!!")&&!message.content.startsWith("!!!")&&!message.content.endsWith("!")){
     message.delete();
    message.channel.send(message.author.toString()+" __**No se reconocio el comando,por favor compruebe el comando usando !comandos **__");
  }
   


});
client.login(process.env.BOT_TOKEN);
