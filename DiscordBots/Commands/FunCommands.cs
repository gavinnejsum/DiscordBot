using DSharpPlus.CommandsNext;
using DSharpPlus;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DSharpPlus.CommandsNext.Attributes;
using System.IO;

namespace DiscordBot.Commands
{
    public class FunCommands : BaseCommandModule
    {
         
        [Command("Ping")]
        [Description("Returns Pong")]
        public async Task Ping(CommandContext ctx, string email)
        {
            Console.WriteLine(email);
         

            await ctx.Channel.SendMessageAsync(ctx.User.Mention+ ":\n"+email).ConfigureAwait(false);
            

        }
        [Command("add")]
        public async Task Add(CommandContext ctx, [Description("First number")] int number1, [Description("Second Number")] int number2)
        {
            await ctx.Channel.SendMessageAsync((number1+number2).ToString()).ConfigureAwait(false);

        }

    }
}
