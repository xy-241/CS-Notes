#vault 
>[!note] 2 Ways to check if it is a [[Leader Nodes]]
>1. Use [[vault status]], ``HA Enabled`` is ``true`` 
>2. Run:
>	```bash 
>	curl http://<vault-server-address>:8200/v1/sys/leader
>	```
>	```json
>	//Output, "leader_address" gives the address of the [[Leader Nodes]]
>	{
>	"ha_enabled": true,
>	"is_self": true,
>    "active_time": "2023-08-03T11:25:21.704032923Z",
>    "leader_address": "http://10.0.5.131:8200",
>    "leader_cluster_address": "https://10.0.5.131:8201",
>    "performance_standby": false,
>    "performance_standby_last_remote_wal": 0,
>    "raft_committed_index": 57,
>    "raft_applied_index": 57
>  }
>	```