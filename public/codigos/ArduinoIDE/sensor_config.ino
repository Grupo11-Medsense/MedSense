
#include "DHT.h" // Inclue biblioteca do sensor DHT11

#define TIPO_SENSOR DHT11 // Define o tipo do sensor
const int PINO_SENSOR_DHT11 = A1; 

DHT sensorDHT(PINO_SENSOR_DHT11, TIPO_SENSOR); // Inicializa o objeto DHT (utiliza tipo do sensor e o pino)

void setup(){  // Função de inicialização
  Serial.begin(9600); 
  sensorDHT.begin(); 
}

void loop(){  // Função de execução contínua
  float umidade = sensorDHT.readHumidity();  
  float temperatura = sensorDHT.readTemperature(); 

  if (isnan(temperatura) || isnan(umidade)) { // Se o valor de temperatura ou umidade forem inválidos exibe mensagem de erro abaixo
    Serial.println("Erro ao ler dados do sensor"); 
  }
  
  else { // Caso um, ou os dois tipos de dados forem valídos exibir a mensagem abaixo (sintaxe válida para o gráfico)
    Serial.print(umidade - 10);
    Serial.print (";");
    Serial.println(temperatura - 19);
  }
  delay(2000); // Intervalo de tempo (2 segundos) para executar o loop novamente
}
