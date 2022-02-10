import socket
import requests
import sys
import json 

url = 'http://localhost:8080/recevoir'
url_api = 'http://jsonip.com/'

def recup_sys_infos():
    mon_os = sys.platform
    return mon_os


def recup_ip():
    r = requests.get(url_api)
    ip = r.text
    return json.loads(ip)
    

def recup_hostname():
    le_host_name = socket.gethostname()
    return le_host_name


def main():
    
    mon_os_data = recup_sys_infos()
    mon_ip_data = recup_ip()
    ip_convert = mon_ip_data['ip']
    mon_hostname_data = recup_hostname()
    
    if mon_ip_data and mon_hostname_data and mon_os_data:
        print('Tout est ok')
        mon_objet = {'ip': ip_convert,
                     'hostname': mon_hostname_data, 'os': mon_os_data}
        la_req = requests.post(url, data=mon_objet)
        if la_req.status_code == 200:
            la_req.close()

if __name__ == "__main__":
    main()
