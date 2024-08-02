import { Button } from './button';

export default {
  component: Button,
  title: 'Button'
};

export const Primary = () => <Button variant={'primary'}>Primary</Button>;

export const Secondary = () => <Button variant={'secondary'}>Secondary</Button>;

export const Outlined = () => <Button variant={'outline'}>Outlined</Button>;

export const Destructive = () => <Button variant={'destructive'}>Destructive</Button>;

export const Ghost = () => <Button variant={'ghost'}>Ghost</Button>;

export const Link = () => <Button variant={'link'}>Link</Button>;
