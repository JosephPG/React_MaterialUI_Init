import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import PieChart from '@material-ui/icons/PieChart';
import FindInPage from '@material-ui/icons/FindInPage';
import ConfirmationNumber from '@material-ui/icons/ConfirmationNumber';
import FormatListNumbered from '@material-ui/icons/FormatListNumbered';
import Chat from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none'
};

export const mailFolderListItems = (
  <div>
    <Link to="/" style={{ textDecoration: 'none' }} >
      <ListItem button>
        <Tooltip title="Dashboard" placement="right">
          <ListItemIcon>
            <PieChart />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/Registrar">
      <ListItem button>
        <Tooltip title="Nuevo Ticket" placement="right">
          <ListItemIcon>
            <ConfirmationNumber />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Nuevo Ticket" />
      </ListItem>
    </Link>
    <ListItem button>
      <Tooltip title="Listar Tickets" placement="right">
        <ListItemIcon>
          <FormatListNumbered />
        </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Listar Tickets" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <Tooltip title="Avanzado" placement="right">
        <ListItemIcon>
          <FindInPage />
        </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Avanzado" />
    </ListItem>
    <ListItem button>
      <Tooltip title="Chat" placement="right">
        <ListItemIcon>
          <Chat />
        </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Chat" />
    </ListItem>
  </div>
);