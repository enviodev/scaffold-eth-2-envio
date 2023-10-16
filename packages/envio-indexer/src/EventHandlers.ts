import {
  GreetingContract_GreetingChange_loader,
  GreetingContract_GreetingChange_handler,
} from "../generated/src/Handlers.gen";

import { GreetingEntity, UserEntity } from "../generated/src/Types.gen";

GreetingContract_GreetingChange_loader(({ event, context }) => {
  context.User.load(event.params.greetingSetter);
});

GreetingContract_GreetingChange_handler(({ event, context }) => {
  let currentUser = context.User.get(event.params.greetingSetter);

  let userEntity: UserEntity = currentUser
    ? {
        ...currentUser,
        greetingsCount: currentUser.greetingsCount + 1,
        premium: currentUser.premium || event.params.premium,
      }
    : {
        id: event.params.greetingSetter,
        address: event.params.greetingSetter,
        greetingsCount: 1,
        premium: event.params.premium,
      };

  let greetingEntity: GreetingEntity = {
    id: event.transactionHash,
    user: event.params.greetingSetter,
    value: event.params.value,
    greeting: event.params.newGreeting,
    premium: event.params.premium,
  };

  context.Greeting.set(greetingEntity);
  context.User.set(userEntity);
});
