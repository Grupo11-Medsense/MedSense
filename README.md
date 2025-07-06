MoniTemp - Monitoramento de Medicamentos Termolábeis

![alt text](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)


![alt text](https://img.shields.io/badge/linguagem-C%2B%2B%20(Arduino)-blue)


![alt text](https://img.shields.io/badge/licença-MIT-green)

Sistema de monitoramento em tempo real de temperatura e umidade para armazenamento seguro de medicamentos termolábeis, garantindo a eficácia terapêutica, conformidade regulatória e redução de perdas financeiras.
Índice

    Contexto do Problema

    Objetivos do Projeto

    Justificativa e Impacto

    Como Funciona

    Tecnologias Utilizadas

    Instalação e Uso do Protótipo

    Estrutura do Projeto

    Como Contribuir

    Licença

📖 Contexto do Problema

Medicamentos termolábeis, como insulinas, imunobiológicos e imunoglobulinas, são essenciais para o tratamento de diversas doenças, mas exigem um controle rigoroso de temperatura (geralmente entre 2°C e 8°C) e umidade (entre 40% e 70%) para manter sua eficácia e segurança.

A falha no armazenamento adequado desses produtos gera consequências graves:

    Perda de Eficácia Terapêutica: O medicamento pode se tornar inútil, comprometendo o tratamento do paciente.

    Riscos à Saúde: A alteração da composição química pode gerar reações adversas.

    Prejuízos Financeiros: O descarte de medicamentos termolábeis no Brasil atinge cerca de 20%, devido a falhas de armazenamento (dados da Anvisa). Globalmente, a indústria biofarmacêutica perde US$ 35 bilhões anualmente por falhas na logística de temperatura (IQVIA).

Para garantir a qualidade, a ANVISA, através da resolução RDC 430/2020, exige o monitoramento contínuo, calibração de instrumentos e registro de dados, tornando a automação um fator crucial para a conformidade.
🎯 Objetivos do Projeto

Diante deste cenário, o projeto MoniTemp tem como principais objetivos:

✔️ Monitoramento Contínuo: Assegurar que os medicamentos sejam mantidos em condições ideais, através do acompanhamento em tempo real dos níveis de temperatura e umidade.

✔️ Alertas Automatizados: Implementar um sistema que notifique imediatamente qualquer desvio dos parâmetros ideais, permitindo uma ação corretiva rápida para evitar perdas.

✔️ Rastreabilidade e Histórico: Criar e manter um banco de dados estruturado para controle, rastreabilidade e histórico de cada lote, garantindo conformidade com as boas práticas de armazenagem.

✔️ Redução de Perdas: Oferecer uma solução tecnológica e escalável para mitigar os prejuízos financeiros associados ao descarte de medicamentos.
💡 Justificativa e Impacto

A indústria biofarmacêutica movimenta aproximadamente US$ 131 bilhões por ano, mas cerca de 26% dos custos operacionais estão associados a falhas que poderiam ser evitadas. Nosso serviço visa atacar diretamente esse problema, reduzindo perdas que incluem custos com ensaios clínicos, descarte de lotes, logística desperdiçada e análises corretivas.

Com a implementação de tecnologias adequadas, estima-se que 10% das perdas são facilmente evitáveis. Nosso objetivo inicial é reduzir os prejuízos para patamares próximos de 15%, com potencial de otimização contínua. O MoniTemp não só garante a segurança dos pacientes e a conformidade regulatória, mas também gera um impacto financeiro positivo e mensurável.
⚙️ Como Funciona

O sistema é baseado em um protótipo inicial que demonstra a viabilidade e a funcionalidade do conceito. O fluxo de operação é o seguinte:

    Captura de Dados: Um sensor DHT11 mede continuamente a temperatura e a umidade do ambiente de armazenamento.

    Processamento: Um microcontrolador Arduino UNO lê os dados do sensor em intervalos programados.

    Análise e Verificação: O Arduino compara os valores lidos com os limites seguros pré-definidos (2°C-8°C e 40%-70%).

    Comunicação e Alerta:

        Se os valores estiverem dentro da normalidade, os dados são registrados para fins de histórico (via Serial Monitor no protótipo, ou enviados a um banco de dados em uma versão futura).

        Se algum valor ultrapassar os limites, o sistema ativa um alerta (por exemplo, um LED, um buzzer ou, em versões futuras, uma notificação por e-mail/SMS).

🛠️ Tecnologias Utilizadas
Protótipo Atual

    Hardware:

        Arduino UNO

        Sensor de Temperatura e Umidade DHT11

        Jumpers e Protoboard

    Software:

        Arduino IDE

        Linguagem C/C++
