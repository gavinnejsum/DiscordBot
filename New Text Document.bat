SET DIRECTORY_NAME="E:\Applications\GithubRepositories\DiscordBot\node_modules"
TAKEOWN /f %DIRECTORY_NAME% /r /d y
ICACLS %DIRECTORY_NAME% /grant administrators:F /t
PAUSE