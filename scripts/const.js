/*
  Copyright © 2018 Daniel Aleksandersen <https://www.daniel.priv.no/>

  This file is part of Read with Instapaper.

  Read with Instapaper is free software: you can redistribute it and/or
  modify it under the terms of the GNU General Public License version
  3 as published by the Free Software Foundation.

  Read with Instapaper is distributed in the hope that it will be
  useful, but WITHOUT ANY WARRANTY; without even the implied warranty
  of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
  General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with Read with Instapaper.
  If not, see <https://www.gnu.org/licenses/>.
*/


const USER_AGENT = navigator.userAgent + ' ReadWithInstapaper/' + browser.runtime.getManifest().version 
const URL_INSTAPAPER = 'https://www.instapaper.com/';
const API_ENDPOINT = URL_INSTAPAPER + 'api/';
const URL_READ_URL = URL_INSTAPAPER + 'text?u=';
const URL_READ_BOOKMARK = URL_INSTAPAPER + 'read/';
const URL_READING_LIST = URL_INSTAPAPER + 'u';