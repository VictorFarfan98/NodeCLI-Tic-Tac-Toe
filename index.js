const minimist = require('minimist')

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    console.log(args)
    let cmd = args._[0] || 'help'

    if (args.version || args.v) {
        cmd = 'version'
    }

    if (args.help || args.h) {
        cmd = 'help'
    }
    
    switch (cmd) {
        case 'start':
            require('./cmds/start')
            break

        case 'write':
            require('./cmds/write')(args)
            break

        case 'help':
            require('./cmds/help')(args)
            break
        
        case 'forecast':
            require('./cmds/forecast')(args)
            break
        
        default:
            console.error(`"${cmd}" is not a valid command!`)
            break
    }
    
}