import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styles from "./Navbar.module.css"
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-scroll'

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});

const DrawerNav = () => {

    const classes = useStyles();

    const [state, setState] = React.useState({left: false});
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Link onClick={toggleDrawer(anchor, false)} to="home" spy={true} smooth={true}>   
            <List>
                <ListItem>
                    <ListItemText primary="Home" />
                </ListItem>
            </List>
        </Link>
        <Divider />
        <Link onClick={toggleDrawer(anchor, false)} to="about" spy={true} smooth={true}>
            <List>
                <ListItem>
                    <ListItemText primary="About" />
                </ListItem>
            </List>  
        </Link>
        <Divider />
        <Link onClick={toggleDrawer(anchor, false)} to="skills" spy={true} smooth={true}>
            <List>
                <ListItem>
                    <ListItemText primary="Skills" />
                </ListItem>
            </List>
        </Link>
        <Divider />
        <Link onClick={toggleDrawer(anchor, false)} to="projects" spy={true} smooth={true}>
            <List>
                <ListItem>
                    <ListItemText primary="Projects" />
                </ListItem>
            </List>
        </Link>    
        <Divider />
        <Link onClick={toggleDrawer(anchor, false)} to="blogs" spy={true} smooth={true}>
            <List>
                <ListItem>
                    <ListItemText primary="Blogs" />
                </ListItem>
            </List>
        </Link> 
        <Divider />
        <Link onClick={toggleDrawer(anchor, false)} to="contact" spy={true} smooth={true}>
            <List>
                <ListItem>
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </Link>
      </div>
    );

    return (

        <div className={styles.burgerNav}>
            {['left'].map((anchor) => (
                <div key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon />
                        </IconButton>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </div>
            ))}
        </div>

    )
}

export {DrawerNav}
