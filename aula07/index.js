const { select } = require("@inquirer/prompts");
const goal = {
  value: "tormar 3L de água por dia ",
  checked: false,
};

const goals = [goal];

const registerGoal = async () => {
  const goal = await input({
    message: "Digite a sua meta: ",
  });

  if (goal.length === 0) {
    console.log("A meta não pode ser vazia!");
    return;
  }

  goals.push({ value: goal, checked: false });
};

const start = async () => {
  while (true) {
    const option = await select({
      message: "Menu > ",
      choices: [
        {
          name: "Cadastrar meta",
          value: "register",
        },
        {
          name: "Sair",
          value: "out",
        },
      ],
    });

    switch (option) {
      case "register":
        await registerGoal();
        console.log(goals);
        break;
      case "list":
        console.log("Vamos listar sua(s) meta(s)!");
        break;
      case "out":
        console.log("Até a próxima!");
        return;
    }
  }
};

start();
