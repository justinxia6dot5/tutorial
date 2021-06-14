module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-14-88-177.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/helloJiege.pem',
      ref: 'origin/master',
      repo: 'https://github.com/justinxia6dot5/tutorial.git',
      path: '/home/ubuntu/tutorial-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
