using System;

namespace DiscordBot.Bots
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var bot = new Bot();
            bot.RunAsync().GetAwaiter().GetResult(); 
        }
    }
}
