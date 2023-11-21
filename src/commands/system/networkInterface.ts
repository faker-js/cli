import { Command } from 'commander';

const command = new Command('networkInterface')
  .description(
    `Returns a random [network interface](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/networking_guide/sec-understanding_the_predictable_network_interface_device_names).`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.system.networkInterface());
  });

export default command;
