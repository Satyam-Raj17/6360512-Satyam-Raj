using Confluent.Kafka;
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        var config = new ProducerConfig { BootstrapServers = "localhost:9092" };

        using var producer = new ProducerBuilder<Null, string>(config).Build();

        Console.WriteLine("Enter messages (type 'exit' to quit):");

        while (true)
        {
            string input = Console.ReadLine();
            if (input == "exit") break;

            await producer.ProduceAsync("chat-topic", new Message<Null, string> { Value = input });
        }
    }
}
