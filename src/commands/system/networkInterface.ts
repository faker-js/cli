import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('networkInterface')
  .description(
    `Returns a random [network interface](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/networking_guide/sec-understanding_the_predictable_network_interface_device_names).`,
  )
  .action(() => {
    console.log(faker['system']['networkInterface']());
  });

export default command;
