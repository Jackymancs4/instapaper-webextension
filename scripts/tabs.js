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


// Get the active tab in the active window
function getActiveTab()
{
  return browser.tabs.query(
    {
      active: true,
      currentWindow: true
    }
  );
}


// Get tabs with given URL
function getTabsWithUrl(url)
{
  return browser.tabs.query(
    {
      currentWindow: true,
      url: url
    }
  );
}


// Test if a tab is in Firefox-native reading mode
function isFirefoxReaderViewTab(tab)
{
  return (tab.isInReaderMode && isFirefoxReaderViewUrl(tab.url));
}


// Close a tab
function closeTabs(ids)
{
  // Return promise of closing a specific tab
  if (ids)
  {
    return browser.tabs.remove(ids);
  }
  // Close active tab
  browser.tabs.remove();
}


// Open in active or new tab
function openLink(open_in_new_tab, tab_id, url)
{
  if (open_in_new_tab)
  {
    return browser.tabs.create(
      {
        url: url
      }
    );
  }
  else
  {
    return browser.tabs.update(
      tab_id,
      {
        url: url
      }
    );
  }
  return false;
}


// Open new or activate reading list
function openReadingList(open_in_new_tab, active_tab_id)
{
  if (open_in_new_tab)
  {
    return openLink(open_in_new_tab, null, URL_READING_LIST);
  }

  return new Promise(
    (resolve, reject) =>
    {
      var querying = getTabsWithUrl(URL_READING_LIST);
      querying.then(
        tabs => {
          if (tabs && tabs.length >= 1)
          {
            resolve(browser.tabs.update(tabs[0].id,
              {
                active: true
              }
            ));
          }
          else
          {
            resolve(openLink(false, active_tab_id, URL_READING_LIST));
          } 
        },
        () => esolve(openLink(false, active_tab_id, URL_READING_LIST))
      );
    }
  );
}