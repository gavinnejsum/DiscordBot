using DiscordBot.Commands;
using DSharpPlus;
using DSharpPlus.CommandsNext;
using DSharpPlus.EventArgs;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace DiscordBot
{
    public class Bot
    {
        public DiscordClient Client { get; private set; }
        public CommandsNextExtension Commands { get; private set;}
        public async Task RunAsync()
        {
            var json = string.Empty;

            using (var fs = File.OpenRead("E:\\Applications\\GithubRepositories\\DiscordBot\\DiscordBots\\config.json"))
            using (var sr = new StreamReader(fs, new UTF8Encoding(false)))
                json = await sr.ReadToEndAsync().ConfigureAwait(false);

            var configJson = JsonConvert.DeserializeObject<ConfigJson>(json);

                var config = new DiscordConfiguration
                {
                    Token = configJson.Token,
                    TokenType = TokenType.Bot,
                    AutoReconnect = true,
                    MinimumLogLevel = LogLevel.Debug
                };

            Client = new DiscordClient(config);

            Client.Ready += Client_Ready;

            var commandsConfig = new CommandsNextConfiguration
            {
                StringPrefixes =new string[] { configJson.Prefix },
                EnableDms = true,
                EnableMentionPrefix = true,
                DmHelp = true
            };
            Commands = Client.UseCommandsNext(commandsConfig);

            Commands.RegisterCommands<FunCommands>();

            await Client.ConnectAsync();
            await Task.Delay(-1);
        }

        private Task Client_Ready(DiscordClient sender, ReadyEventArgs e)
        {
            Console.WriteLine("Online");
            return Task.CompletedTask;
        }

        private Task ClientReady(ReadyEventArgs e)
        {
            Console.WriteLine("Online"); 
            return null;
        }
    }
}
