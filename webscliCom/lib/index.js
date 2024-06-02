class Command {
  constructor(instance) {

    if(!instance){
      throw new Error('command instance must not be null!!!')
    }
    this.program = instance
    const cmd = this.program.command(this.command)
    cmd.description(this.description)
    cmd.hook('preAction', () => {
      this.preAction();
    });
    cmd.hook('postAction', () => {
      this.postAction();
    });

    if (this.options?.length > 0) {
      this.options.forEach(option => {
        cmd.option(...option);
      })
    }
    cmd.action((...params) => {
      this.action(params);
    });
  }
  get command(){
    throw new Error('command be implements')
  }
  get description(){
    throw new Error('description be implements')
  }
  get options(){
    throw new Error('options be implements')
  }
  get action() {
    throw new Error('action must be implements');
  }

  preAction() {
    // empty
    // console.log('preAction1111')
  }

  postAction() {
    // empty
    // console.log('postAction')
  }
}

export default Command;
