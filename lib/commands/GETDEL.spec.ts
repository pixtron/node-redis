import { strict as assert } from 'assert';
import { TestRedisServers, itWithClient, TestRedisClusters, itWithCluster } from '../test-utils';
import { transformArguments } from './GETDEL';

describe('GETDEL', () => {
    it('transformArguments', () => {
        assert.deepEqual(
            transformArguments('key'),
            ['GETDEL', 'key']
        );
    });

    itWithClient(TestRedisServers.OPEN, 'client.getDel', async client => {
        assert.equal(
            await client.getDel('key'),
            null
        );
    });


    itWithCluster(TestRedisClusters.OPEN, 'cluster.getDel', async cluster => {
        assert.equal(
            await cluster.getDel('key'),
            null
        );
    });
});