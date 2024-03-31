const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const bicepsMuscle = await prisma.muscle.create({
      data: {
        name: "Biceps",
        slug: "biceps",
        imageUrl: "https://i.imgur.com/hIolTqj.png",
      },
    });

    const biceps = [
        {
            name: "Curl com Barra",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Segure a barra com as palmas viradas para fora e levante-a em direção ao peito, contraindo os músculos do bíceps.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "curl-com-barra"
          },
          {
            name: "Martelo com Halteres",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Segure um haltere em cada mão com as palmas voltadas para os lados. Levante os halteres em direção aos ombros.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "martelo-com-halteres"
          },
          {
            name: "Curl Concentrado",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Sente-se em um banco inclinado, coloque o cotovelo na parte interna da coxa e realize o curl com halteres, isolando o bíceps.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "curl-concentrado"
          },
          {
            name: "Curl 21s",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Realize 7 repetições na parte inferior do movimento, 7 na parte superior e 7 completas, mantendo a contração constante.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "curl-21s"
          },
          {
            name: "Rosca Scott",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Use um banco Scott para realizar curls, enfatizando a parte superior do bíceps.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "rosca-scott"
          },
          {
            name: "Curl com Cabo",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Utilize uma máquina de cabo para realizar o curl, mantendo a resistência constante.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "curl-com-cabo"
          },
          {
            name: "Curl Invertido",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Realize o curl com barra invertida, mantendo as palmas viradas para o corpo.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "curl-invertido"
          },
          {
            name: "Curl 21s Invertido",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Variação do Curl 21s com a barra invertida.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "curl-21s-invertido"
          },
          {
            name: "Rosca Alternada",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Segure um haltere em cada mão e alterne os curls, trabalhando cada braço separadamente.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "rosca-alternada"
          },
          {
            name: "Curl na Máquina",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Utilize a máquina de curl para trabalhar os bíceps com resistência controlada.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "curl-na-maquina"
          },
          {
            name: "Rosca 21s",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Divida o movimento em 7 repetições na parte inferior, 7 na parte superior e 7 completas.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "rosca-21s"
          },
          {
            name: "Curl 21s com Halteres",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Variação do Curl 21s utilizando halteres.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "curl-21s-com-halteres"
          },
          {
            name: "Rosca Invertida",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Realize o curl com barra invertida, enfatizando a parte inferior do bíceps.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "rosca-invertida"
          },
          {
            name: "Curl com Corda",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Utilize a corda na máquina de cabo para realizar o curl, mantendo os punhos neutros.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "curl-com-corda"
          },
          {
            name: "Rosca Alternada com Halteres",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Alterne os curls com halteres, focando no controle do movimento.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "rosca-alternada-com-halteres"
          },
          {
            name: "Curl 21s na Máquina",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Realize o Curl 21s utilizando a máquina de curl para controle adicional.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "curl-21s-na-maquina"
          },
          {
            name: "Rosca na Barra Fixa",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Segure-se na barra fixa e levante o corpo, concentrando o esforço nos bíceps.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: bicepsMuscle.id,
            slug: "rosca-na-barra-fixa"
          },
    ];

    await prisma.exercise.createMany({
      data: biceps,
    });

    const tricepsMuscle = await prisma.muscle.create({
        data: {
          name: "Triceps",
          slug: "triceps",
          imageUrl: "https://i.imgur.com/hIolTqj.png",
        },
      });
      
      const triceps = [
        {
          name: "Tríceps Pulley",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a máquina de pulley com a corda para estender os braços, trabalhando os tríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-pulley"
        },
        {
          name: "Tríceps Coice",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Com um haltere em uma mão, estenda o braço para trás, focando na parte posterior dos tríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-coice"
        },
        {
          name: "Tríceps Testa",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Deitado em um banco, segure uma barra e estenda os braços sobre a testa, trabalhando os tríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-testa"
        },
        {
          name: "Tríceps Mergulho",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Utilize barras paralelas para realizar mergulhos, focando no trabalho intenso dos tríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-mergulho"
        },
        {
          name: "Tríceps Francês",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Deitado em um banco, segure um haltere com as duas mãos e estenda os braços para trás.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-frances"
        },
        {
          name: "Tríceps Corda",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a corda na máquina de pulley para realizar extensões de tríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-corda"
        },
        {
          name: "Tríceps Kickback",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Incline o corpo para a frente, segure um haltere e estenda o braço para trás, trabalhando os tríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-kickback"
        },
        {
          name: "Tríceps Banco",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Sentado em um banco, segure um haltere com ambas as mãos e estenda os braços acima da cabeça.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-banco"
        },
        {
          name: "Tríceps Barra V",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Utilize uma barra em V na máquina de pulley para realizar extensões de tríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-barra-v"
        },
        {
          name: "Tríceps Corda Alta",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Utilize a corda na posição alta na máquina de pulley para realizar extensões de tríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-corda-alta"
        },
        {
          name: "Tríceps Halteres",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Segure um haltere com as duas mãos e estenda os braços acima da cabeça.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-halteres"
        },
        {
          name: "Tríceps Pulley Invertido",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Utilize a máquina de pulley com a barra invertida para realizar extensões de tríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-pulley-invertido"
        },
        {
          name: "Tríceps Máquina",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Utilize a máquina específica para treino de tríceps, ajustando o peso conforme necessário.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-maquina"
        },
        {
          name: "Tríceps Rosca",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Segure uma barra EZ e estenda os braços para trás, concentrando o esforço nos tríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-rosca"
        },
        {
          name: "Tríceps Pulley Corda",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a máquina de pulley com a corda para realizar extensões de tríceps, focando na amplitude.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-pulley-corda"
        },
        {
          name: "Tríceps Mergulho Bancada",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Utilize um banco para realizar mergulhos, enfatizando o trabalho dos tríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-mergulho-bancada"
        },
        {
          name: "Tríceps Pulley Barra Reta",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a máquina de pulley com a barra reta para extensões de tríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: tricepsMuscle.id,
          slug: "triceps-pulley-barra-reta"
        },
      ];
      
      await prisma.exercise.createMany({
        data: triceps,
      });

    const peitoMuscle = await prisma.muscle.create({
        data: {
          name: "Peito",
          slug: "peito",
          imageUrl: "https://i.imgur.com/hIolTqj.png",
        },
      });
  
      const peito = [
        {
            name: "Supino Reto",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Deite-se em um banco plano e levante a barra em direção ao teto, trabalhando o peito.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "supino-reto"
          },
          {
            name: "Supino Inclinado",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Deite-se em um banco inclinado e levante a barra em direção ao teto, enfatizando a parte superior do peito.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "supino-inclinado"
          },
          {
            name: "Flexão de Braço",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Realize flexões de braço no chão, trabalhando o peito e os músculos do tronco.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "flexao-de-braco"
          },
          {
            name: "Máquina Peck Deck",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Utilize a máquina Peck Deck para realizar movimentos que isolam o peito.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "maquina-peck-deck"
          },
          {
            name: "Crossover",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Utilize cabos cruzados na máquina de crossover para trabalhar os músculos peitorais.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "crossover"
          },
          {
            name: "Flexão Declinada",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Realize flexões de braço com os pés elevados, enfatizando a parte inferior do peito.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "flexao-declinada"
          },
          {
            name: "Pullover",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Deite-se em um banco e segure um haltere acima da cabeça, realizando movimentos de vai e vem.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "pullover"
          },
          {
            name: "Supino Máquina",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Utilize a máquina de supino para realizar movimentos controlados.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "supino-maquina"
          },
          {
            name: "Flexão com Palmas",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Realize flexões de braço com as palmas das mãos levantadas do chão, trabalhando diferentes músculos do peito.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "flexao-com-palmas"
          },
          {
            name: "Supino Declinado",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Deite-se em um banco declinado e levante a barra em direção ao teto, focando na parte inferior do peito.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "supino-declinado"
          },
          {
            name: "Flexão com Peso",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Realize flexões de braço com um colete ponderado para aumentar a resistência.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "flexao-com-peso"
          },
          {
            name: "Máquina Fly",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Utilize a máquina Fly para realizar movimentos de abertura, isolando o peito.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "maquina-fly"
          },
          {
            name: "Supino Halteres",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Deite-se em um banco e levante halteres em direção ao teto, trabalhando cada lado separadamente.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "supino-halteres"
          },
          {
            name: "Flexão Diamond",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Realize flexões de braço com as mãos posicionadas formando um diamante, focando nos tríceps e no peito.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "flexao-diamond"
          },
          {
            name: "Supino Fechado",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Utilize uma pegada mais estreita na barra para enfocar os músculos tríceps e o peito.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "supino-fechado"
          },
          {
            name: "Máquina Pullover",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Utilize a máquina Pullover para realizar movimentos controlados que trabalham o peito e os músculos dorsais.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "maquina-pullover"
          },
          {
            name: "Flexão com Rotação",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Realize flexões de braço com rotação do tronco, ativando diferentes áreas do peito.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "flexao-com-rotacao"
          },
          {
            name: "Dips no Banco",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Utilize dois bancos paralelos para realizar dips, focando no trabalho do peito e tríceps.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "dips-no-banco"
          },
          {
            name: "Fly com Halteres Inclinado",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Deite-se em um banco inclinado e realize movimentos de abertura com halteres.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "fly-com-halteres-inclinado"
          },
          {
            name: "Flexão na Máquina",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Utilize a máquina específica para flexão de peito, ajustando o peso conforme necessário.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "flexao-na-maquina"
          },
          {
            name: "Supino com Pegada Neutra",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Realize supino com uma barra com pegada neutra, enfocando os músculos do peito de maneira diferente.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "supino-com-pegada-neutra"
          },
          {
            name: "Flexão Plyo",
            enabled: true,
            difficulty: "Avançado",
            instructions: "Realize flexões de braço explosivas, tirando as mãos do chão durante o movimento.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "flexao-plyo"
          },
          {
            name: "Pullover com Barra",
            enabled: true,
            difficulty: "Iniciante",
            instructions: "Deite-se em um banco e segure uma barra acima da cabeça, realizando movimentos de vai e vem.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "pullover-com-barra"
          },
          {
            name: "Supino Declinado com Halteres",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Deite-se em um banco declinado e levante halteres em direção ao teto, focando na parte inferior do peito.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "supino-declinado-com-halteres"
          },
          {
            name: "Chest Press na Máquina",
            enabled: true,
            difficulty: "Intermediário",
            instructions: "Utilize a máquina de Chest Press para realizar movimentos controlados.",
            image: ["https://i.imgur.com/hIolTqj.png"],
            muscle_id: peitoMuscle.id,
            slug: "chest-press-na-maquina"
          },
          {
              name: "Flexão Isométrica",
              slug: "flexao-isometrica",
              enabled: true,
              difficulty: "Avançado",
              instructions: "Realize flexões de braço, mantendo a posição por alguns segundos no ponto mais baixo do movimento.",
              image: ["https://i.imgur.com/hIolTqj.png"],
              muscle_id: peitoMuscle.id
          },
          {
              name: "Chest Press com Halteres Inclinado",
              slug: "chest-press-halteres-inclinado",
              enabled: true,
              difficulty: "Intermediário",
              instructions: "Deite-se em um banco inclinado e levante halteres em direção ao teto.",
              image: ["https://i.imgur.com/hIolTqj.png"],
              muscle_id: peitoMuscle.id
          },
          {
              name: "Crossover com Cabos Cruzados Alta",
              slug: "crossover-cabos-cruzados-alta",
              enabled: true,
              difficulty: "Avançado",
              instructions: "Utilize a máquina de crossover com os cabos posicionados em altura para realizar movimentos de cruzamento.",
              image: ["https://i.imgur.com/hIolTqj.png"],
              muscle_id: peitoMuscle.id
          },
          {
              name: "Crossover com Cabos Cruzados Média",
              slug: "crossover-cabos-cruzados-media",
              enabled: true,
              difficulty: "Intermediário",
              instructions: "Posicione os cabos da máquina de crossover na altura média para realizar movimentos de cruzamento.",
              image: ["https://i.imgur.com/hIolTqj.png"],
              muscle_id: peitoMuscle.id
          },
          {
              name: "Crossover com Cabos Cruzados Baixa",
              slug: "crossover-cabos-cruzados-baixa",
              enabled: true,
              difficulty: "Iniciante",
              instructions: "Ajuste os cabos da máquina de crossover para a posição baixa e realize movimentos de cruzamento.",
              image: ["https://i.imgur.com/hIolTqj.png"],
              muscle_id: peitoMuscle.id
          },
          {
              name: "Crossover Unilateral com Halteres",
              slug: "crossover-unilateral-halteres",
              enabled: true,
              difficulty: "Avançado",
              instructions: "Segure um haltere em cada mão e cruze os braços no centro do corpo, focando no peito.",
              image: ["https://i.imgur.com/hIolTqj.png"],
              muscle_id: peitoMuscle.id
          },
          {
              name: "Crossover com Elásticos",
              slug: "crossover-com-elasticos",
              enabled: true,
              difficulty: "Intermediário",
              instructions: "Fixe elásticos em uma estrutura estável e realize movimentos de crossover para trabalhar o peito.",
              image: ["https://i.imgur.com/hIolTqj.png"],
              muscle_id: peitoMuscle.id
          },
      ];
  
      await prisma.exercise.createMany({
        data: peito,
      });

      const costasMuscle = await prisma.muscle.create({
        data: {
          name: "Costas",
          slug: "costas",
          imageUrl: "https://i.imgur.com/hIolTqj.png",
        },
      });
      
      const costas = [
        {
          name: "Barra Fixa",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Segure-se em uma barra fixa e levante o corpo, trabalhando os músculos das costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "barra-fixa"
        },
        {
          name: "Puxada Frontal",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Utilize a máquina de puxada frontal para trabalhar os músculos das costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "puxada-frontal"
        },
        {
          name: "Remada Curvada",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Incline-se em um banco e realize movimentos de puxada com uma barra, trabalhando as costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "remada-curvada"
        },
        {
          name: "Pull Down",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a máquina de Pull Down para puxar a barra em direção ao peito, trabalhando as costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "pull-down"
        },
        {
          name: "Levantamento Terra",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Levante a barra do chão mantendo a coluna ereta, trabalhando os músculos das costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "levantamento-terra"
        },
        {
          name: "Remada Unilateral com Halteres",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Com um haltere em cada mão, realize movimentos de remada unilateral.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "remada-unilateral-com-halteres"
        },
        {
          name: "Pull Over",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Deite-se em um banco e segure um haltere acima da cabeça, realizando movimentos de vai e vem.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "pull-over"
        },
        {
          name: "Máquina Pulldown",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Utilize a máquina específica para Pulldown para trabalhar os músculos das costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "maquina-pulldown"
        },
        {
          name: "Remada Cavalinho",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Deite-se de bruços em um banco inclinado e realize movimentos de remada com halteres.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "remada-cavalinho"
        },
        {
          name: "Puxada na Máquina",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Utilize a máquina específica para Puxada para trabalhar os músculos das costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "puxada-na-maquina"
        },
        {
          name: "Remada Serrote",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Com um haltere em uma mão e um joelho apoiado no banco, realize movimentos de remada unilateral.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "remada-serrote"
        },
        {
          name: "Pull Up",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Realize elevações na barra fixa, trabalhando os músculos das costas e dos braços.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "pull-up"
        },
        {
          name: "Remada na Máquina Smith",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Utilize a máquina Smith para realizar movimentos de remada, focando nas costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "remada-na-maquina-smith"
        },
        {
          name: "Remada com Barra T",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Posicione-se em um banco inclinado e realize movimentos de remada com a barra T.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "remada-com-barra-t"
        },
        {
          name: "Máquina Pullover",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a máquina Pullover para trabalhar os músculos das costas e do peito.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "maquina-pullover"
        },
        {
          name: "Hiperextensão",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize um banco romano para realizar hiperextensões, fortalecendo a região lombar e os músculos das costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "hiperextensao"
        },
        {
          name: "Puxada Alta",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Utilize a máquina de puxada alta para trabalhar os músculos superiores das costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "puxada-alta"
        },
        {
          name: "Máquina Row",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Utilize a máquina específica para Row para realizar movimentos controlados, trabalhando as costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "maquina-row"
        },
        {
          name: "Remada na Máquina Unilateral",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Utilize a máquina unilateral para realizar movimentos de remada, trabalhando cada lado separadamente.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "remada-na-maquina-unilateral"
        },
        {
          name: "Pulldown Invertido",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Utilize a máquina de Pulldown Invertido para trabalhar os músculos das costas de maneira diferente.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "pulldown-invertido"
        },
        {
          name: "Remada Baixa com Triângulo",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Utilize a barra em triângulo na máquina para realizar movimentos de remada baixa.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "remada-baixa-com-triangulo"
        },
        {
          name: "Puxada com Elásticos",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Fixe elásticos em uma estrutura estável e realize movimentos de puxada para trabalhar as costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "puxada-com-elasticos"
        },
        {
          name: "Puxada na Barra em V",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize uma barra em V na máquina para realizar movimentos de puxada, focando nas costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "puxada-na-barra-em-v"
        },
        {
          name: "Remada com Corda",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Utilize a corda na máquina de pulley para realizar movimentos de remada.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "remada-com-corda"
        },
        {
          name: "Máquina Lat Pulldown",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a máquina específica para Lat Pulldown para trabalhar os músculos das costas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: costasMuscle.id,
          slug: "maquina-lat-pulldown"
        },
      ];
      
      await prisma.exercise.createMany({
        data: costas,
      });
      
      const ombrosMuscle = await prisma.muscle.create({
        data: {
          name: "Ombros",
          slug: "ombros",
          imageUrl: "https://i.imgur.com/hIolTqj.png",
        },
      });
      
      const ombros = [
        {
          name: "Desenvolvimento com Barra",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Em pé, levante a barra sobre a cabeça, trabalhando os músculos dos ombros.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: ombrosMuscle.id,
          slug: "desenvolvimento-com-barra"
        },
        {
          name: "Elevação Frontal com Halteres",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Com um haltere em cada mão, eleve os braços à frente, focando nos deltoides anteriores.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: ombrosMuscle.id,
          slug: "elevacao-frontal-com-halteres"
        },
        {
          name: "Desenvolvimento com Halteres",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Sentado, levante os halteres sobre a cabeça, trabalhando os músculos dos ombros.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: ombrosMuscle.id,
          slug: "desenvolvimento-com-halteres"
        },
        {
          name: "Elevação Lateral com Halteres",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Com um haltere em cada mão, eleve os braços para os lados, trabalhando os deltoides laterais.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: ombrosMuscle.id,
          slug: "elevacao-lateral-com-halteres"
        },
        {
          name: "Press Arnold",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Realize um movimento combinado de rotação dos ombros durante o levantamento da barra.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: ombrosMuscle.id,
          slug: "press-arnold"
        },
        {
          name: "Elevação Frontal com Corda",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a corda na máquina de pulley para elevar os braços à frente.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: ombrosMuscle.id,
          slug: "elevacao-frontal-com-corda"
        },
        {
          name: "Desenvolvimento com Máquina Smith",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a máquina Smith para realizar desenvolvimentos controlados.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: ombrosMuscle.id,
          slug: "desenvolvimento-com-maquina-smith"
        },
        {
          name: "Elevação Lateral na Máquina",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Utilize a máquina específica para elevação lateral, isolando os deltoides laterais.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: ombrosMuscle.id,
          slug: "elevacao-lateral-na-maquina"
        },
        {
          name: "Desenvolvimento Militar",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Sentado, levante a barra sobre a cabeça, trabalhando os músculos dos ombros.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: ombrosMuscle.id,
          slug: "desenvolvimento-militar"
        },
        {
          name: "Elevação Posterior com Halteres",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Com um haltere em cada mão, eleve os braços para trás, trabalhando os deltoides posteriores.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: ombrosMuscle.id,
          slug: "elevacao-posterior-com-halteres"
        },
        {
          name: "Desenvolvimento com Barra Frontal",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Em pé, levante a barra à frente do corpo, focando nos deltoides anteriores.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: ombrosMuscle.id,
          slug: "desenvolvimento-com-barra-frontal"
        },
      ];
      
      await prisma.exercise.createMany({
        data: ombros,
      });

      const abdomenMuscle = await prisma.muscle.create({
        data: {
          name: "Abdômen",
          slug: "abdomen",
          imageUrl: "https://i.imgur.com/hIolTqj.png",
        },
      });
      
      const abdomen = [
        {
          name: "Crunch",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Deite-se de costas, dobre os joelhos e levante o tronco em direção aos joelhos.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: abdomenMuscle.id,
          slug: "crunch"
        },
        {
          name: "Prancha Frontal",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Fique em posição de flexão, mantendo o corpo reto como uma prancha.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: abdomenMuscle.id,
          slug: "prancha-frontal"
        },
        {
          name: "Tesoura",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Deite-se de costas e levante as pernas, alternando entre elas em movimento de tesoura.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: abdomenMuscle.id,
          slug: "tesoura"
        },
        {
          name: "Abdominal Obliquo",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Realize crunches direcionando os cotovelos em direção ao joelho oposto.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: abdomenMuscle.id,
          slug: "abdominal-obliquo"
        },
        {
          name: "Elevação de Pernas",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Deite-se de costas e levante as pernas em direção ao teto, mantendo-as retas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: abdomenMuscle.id,
          slug: "elevacao-de-pernas"
        },
        {
          name: "Prancha Lateral",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Fique de lado, apoiando-se no cotovelo e mantendo o corpo reto como uma prancha lateral.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: abdomenMuscle.id,
          slug: "prancha-lateral"
        },
        {
          name: "Bicicleta",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Deite-se de costas, simule o movimento de pedalar uma bicicleta.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: abdomenMuscle.id,
          slug: "bicicleta"
        },
        {
          name: "Reverse Crunch",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Deite-se de costas, levante as pernas e puxe os joelhos em direção ao peito.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: abdomenMuscle.id,
          slug: "reverse-crunch"
        },
        {
          name: "Máquina Abdominal",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a máquina específica para abdominais, seguindo as instruções do equipamento.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: abdomenMuscle.id,
          slug: "maquina-abdominal"
        },
        {
          name: "Mountain Climber",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Em posição de flexão, traga alternadamente os joelhos em direção ao peito em movimento rápido.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: abdomenMuscle.id,
          slug: "mountain-climber"
        },
        // Adicione mais exercícios conforme necessário
      ];
      
      await prisma.exercise.createMany({
        data: abdomen,
      });

      const quadricepsMuscle = await prisma.muscle.create({
        data: {
          name: "Quadríceps",
          slug: "quadriceps",
          imageUrl: "https://i.imgur.com/hIolTqj.png",
        },
      });
      
      const quadriceps = [
        {
          name: "Agachamento Livre",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Posicione a barra sobre os ombros e agache, mantendo a postura correta.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: quadricepsMuscle.id,
          slug: "agachamento-livre"
        },
        {
          name: "Leg Press",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a máquina de leg press para pressionar as pernas para fora.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: quadricepsMuscle.id,
          slug: "leg-press"
        },
        {
          name: "Cadeira Extensora",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Sente-se na cadeira extensora e estenda as pernas contra a resistência.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: quadricepsMuscle.id,
          slug: "cadeira-extensora"
        },
        {
          name: "Agachamento Smith",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Utilize a máquina Smith para realizar agachamentos com orientação vertical.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: quadricepsMuscle.id,
          slug: "agachamento-smith"
        },
        {
          name: "Afundo",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Dê um passo à frente e desça o corpo, mantendo o joelho de trás próximo ao chão.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: quadricepsMuscle.id,
          slug: "afundo"
        },
        {
          name: "Máquina Adutora",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Sente-se na máquina adutora e pressione as pernas uma contra a outra.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: quadricepsMuscle.id,
          slug: "maquina-adutora"
        },
        {
          name: "Prensa 45 Graus",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a máquina de prensa inclinada a 45 graus para pressionar as pernas para cima.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: quadricepsMuscle.id,
          slug: "prensa-45-graus"
        },
        {
          name: "Agachamento Frontal",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Realize agachamentos segurando a barra à frente do corpo, focando nos quadríceps.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: quadricepsMuscle.id,
          slug: "agachamento-frontal"
        },
        {
          name: "Passada",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Dê um passo à frente e desça o corpo, alternando as pernas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: quadricepsMuscle.id,
          slug: "passada"
        },
        {
          name: "Cadeira Abdutora",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Sente-se na cadeira abdutora e afaste as pernas contra a resistência.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: quadricepsMuscle.id,
          slug: "cadeira-abdutora"
        },
        // Adicione mais exercícios conforme necessário
      ];
      
      await prisma.exercise.createMany({
        data: quadriceps,
      });

      const posteriorMuscle = await prisma.muscle.create({
        data: {
          name: "Posterior de Pernas",
          slug: "posterior_pernas",
          imageUrl: "https://i.imgur.com/hIolTqj.png",
        },
      });
      
      const posteriorPernas = [
        {
          name: "Flexão de Pernas (Prensa)",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Sentado na máquina, flexione as pernas pressionando o peso para cima.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: posteriorMuscle.id,
          slug: "flexao-pernas-prensa"
        },
        {
          name: "Stiff",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Em pé, segure a barra na frente do corpo e incline o tronco para frente, mantendo as pernas estendidas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: posteriorMuscle.id,
          slug: "stiff"
        },
        {
          name: "Cadeira Flexora",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Sente-se na máquina flexora e flexione as pernas contra a resistência.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: posteriorMuscle.id,
          slug: "cadeira-flexora"
        },
        {
          name: "Levantamento Terra",
          enabled: true,
          difficulty: "Avançado",
          instructions: "Em pé, segure a barra na frente do corpo e levante-a mantendo as costas retas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: posteriorMuscle.id,
          slug: "levantamento-terra"
        },
        {
          name: "Máquina Extensora",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Sente-se na máquina extensora e estenda as pernas contra a resistência.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: posteriorMuscle.id,
          slug: "maquina-extensora"
        },
        {
          name: "Flexão de Pernas (Deitado)",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Deite-se de bruços, flexione as pernas levando os calcanhares em direção ao glúteo.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: posteriorMuscle.id,
          slug: "flexao-pernas-deitado"
        },
        {
          name: "Afundo com Barra",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Com a barra nas costas, dê passos alternados para trás, flexionando os joelhos.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: posteriorMuscle.id,
          slug: "afundo-barra"
        },
        {
          name: "Mesa Flexora",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Deite-se de bruços na máquina flexora e flexione as pernas contra a resistência.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: posteriorMuscle.id,
          slug: "mesa-flexora"
        },
        {
          name: "Puxada de Pernas",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Na máquina, puxe a carga flexionando as pernas contra a resistência.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: posteriorMuscle.id,
          slug: "puxada-pernas"
        },
        {
          name: "Cadeira Abdutora",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Sente-se na cadeira abdutora e afaste as pernas contra a resistência.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: posteriorMuscle.id,
          slug: "cadeira-abdutora"
        },
        // Adicione mais exercícios conforme necessário
      ];
      
      await prisma.exercise.createMany({
        data: posteriorPernas,
      });
      
      const gluteosMuscle = await prisma.muscle.create({
        data: {
          name: "Glúteos",
          slug: "gluteos",
          imageUrl: "https://i.imgur.com/hIolTqj.png",
        },
      });
      
      const gluteos = [
        {
          name: "Elevação de Quadril",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Deite-se de costas, dobre os joelhos e levante os quadris em direção ao teto.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: gluteosMuscle.id,
          slug: "elevacao-quadril"
        },
        {
          name: "Agachamento Sumô",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Fique com os pés afastados, vire os dedos para fora e agache, mantendo as costas retas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: gluteosMuscle.id,
          slug: "agachamento-sumo"
        },
        {
          name: "Afundo com Passada Lateral",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Dê um passo lateral e agache, alternando entre as pernas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: gluteosMuscle.id,
          slug: "afundo-passada-lateral"
        },
        {
          name: "Máquina Abdutora",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Sente-se na máquina abdutora e afaste as pernas contra a resistência.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: gluteosMuscle.id,
          slug: "maquina-abdutora"
        },
        {
          name: "Agachamento Livre",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Posicione a barra sobre os ombros e agache, mantendo a postura correta.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: gluteosMuscle.id,
          slug: "agachamento-livre"
        },
        {
          name: "Ponte Glúteo",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Deite-se de costas, dobre os joelhos e levante os quadris em direção ao teto.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: gluteosMuscle.id,
          slug: "ponte-gluteo"
        },
        {
          name: "Cadeira Adutora",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Sente-se na cadeira adutora e junte as pernas contra a resistência.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: gluteosMuscle.id,
          slug: "cadeira-adutora"
        },
        {
          name: "Stiff",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Em pé, segure a barra na frente do corpo e incline o tronco para frente, mantendo as pernas estendidas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: gluteosMuscle.id,
          slug: "stiff"
        },
        {
          name: "Máquina Extensora",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Sente-se na máquina extensora e estenda as pernas contra a resistência.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: gluteosMuscle.id,
          slug: "maquina-extensora"
        },
        {
          name: "Afundo",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Dê um passo à frente e desça o corpo, mantendo o joelho de trás próximo ao chão.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: gluteosMuscle.id,
          slug: "afundo"
        },
      ];
      
      await prisma.exercise.createMany({
        data: gluteos,
      });

      const panturrilhaMuscle = await prisma.muscle.create({
        data: {
          name: "Panturrilha",
          slug: "panturrilha",
          imageUrl: "https://i.imgur.com/hIolTqj.png",
        },
      });
      
      const panturrilha = [
        {
          name: "Elevação de Panturrilha em Pé",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Em pé, eleve os calcanhares o máximo possível, contraindo as panturrilhas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: panturrilhaMuscle.id,
          slug: "elevacao-panturrilha-em-pe"
        },
        {
          name: "Elevação de Panturrilha Sentado",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Sente-se em uma máquina específica e eleve os calcanhares, contraindo as panturrilhas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: panturrilhaMuscle.id,
          slug: "elevacao-panturrilha-sentado"
        },
        {
          name: "Elevação de Panturrilha Unilateral",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Em pé, eleve um calcanhar por vez, concentrando o esforço em uma perna de cada vez.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: panturrilhaMuscle.id,
          slug: "elevacao-panturrilha-unilateral"
        },
        {
          name: "Panturrilha no Leg Press",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Utilize a máquina de leg press para elevar os calcanhares, contraindo as panturrilhas.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: panturrilhaMuscle.id,
          slug: "panturrilha-leg-press"
        },
        {
          name: "Salto com Elevação de Panturrilha",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Realize saltos elevando as panturrilhas ao máximo durante o salto.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: panturrilhaMuscle.id,
          slug: "salto-elevacao-panturrilha"
        },
        // Adicione mais exercícios conforme necessário
      ];
      
      await prisma.exercise.createMany({
        data: panturrilha,
      });
      
      const antebracoMuscle = await prisma.muscle.create({
        data: {
          name: "Antebraço",
          slug: "antebraco",
          imageUrl: "https://i.imgur.com/hIolTqj.png",
        },
      });
      
      const antebraco = [
        {
          name: "Rosca Direta com Barra",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Segure a barra com as palmas viradas para cima e levante, contraindo os músculos dos antebraços.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: antebracoMuscle.id,
          slug: "rosca-direta-barra"
        },
        {
          name: "Rosca Martelo",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Segure halteres com as palmas viradas para o corpo e levante, contraindo os músculos dos antebraços.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: antebracoMuscle.id,
          slug: "rosca-martelo"
        },
        {
          name: "Rosca Inversa",
          enabled: true,
          difficulty: "Intermediário",
          instructions: "Segure a barra com as palmas viradas para baixo e levante, contraindo os músculos dos antebraços.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: antebracoMuscle.id,
          slug: "rosca-inversa"
        },
        {
          name: "Pronação e Supinação de Punho",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Segure um haltere e mova o pulso para cima e para baixo, contraindo os músculos dos antebraços.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: antebracoMuscle.id,
          slug: "pronacao-supinacao-punho"
        },
        {
          name: "Extensão de Punho",
          enabled: true,
          difficulty: "Iniciante",
          instructions: "Segure um haltere e mova o pulso para cima, contraindo os músculos dos antebraços.",
          image: ["https://i.imgur.com/hIolTqj.png"],
          muscle_id: antebracoMuscle.id,
          slug: "extensao-punho"
        },
        // Adicione mais exercícios conforme necessário
      ];
      
      await prisma.exercise.createMany({
        data: antebraco,
      });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });